package apiHandler

import (
	"context"
	"fmt"
	"log"
	"time"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
)

var client *firestore.Client
var ctx context.Context;

// TODO: function to convert timestamp both ways

func addADocument(content string, post_date time.Time, title string){
	initFirebaseSA();
	/*_, _, err := client.Collection("posts").Add(ctx, blogInfo{
		Content: "test",
		Post_date:  time.Now(),
		Title:  "test title",
	})

	if err != nil {
		log.Fatalf("Failed adding alovelace: %v", err)
	}*/
	defer client.Close()
}

func getBlogData() blogResponse {
	initFirebaseSA();
	posts := client.Collection("posts");
	q := posts.OrderBy("Post_date", firestore.Desc)
	iter := q.Documents(ctx);
	var blogInfoSlice = make([]blogInfo, 0);
	for {
		doc, err := iter.Next()
		var blogDecode blogInfo;
		if err == iterator.Done {
			break
		}
		if err := doc.DataTo(&blogDecode); err != nil {
			fmt.Printf("Failed to decode response: %v", err)
			return blogResponse { BlogContentList:[]blogInfo{}, StatusCode:500};
		}
		if err != nil {
			fmt.Printf("Failed to iterate: %v", err)
			return blogResponse { BlogContentList:[]blogInfo{}, StatusCode:500};
		}
		blogDecode.Type = "blog";
		blogDecode.CreatedOn = blogDecode.Post_date.Format("2006-01-02");
		blogInfoSlice = append(blogInfoSlice, blogDecode);
	}
	defer client.Close();
	return blogResponse { BlogContentList:blogInfoSlice, StatusCode:200};
}

func initFirebaseSA() {
	// Use a service account
	ctx = context.Background()
	sa := option.WithCredentialsFile("./private/pinghsuanwebsa.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
	}

	var clientError error;
	client, clientError = app.Firestore(ctx)
	if clientError != nil {
		log.Fatalln(err)
	}

	// addDocument();
	// getDocument();
}