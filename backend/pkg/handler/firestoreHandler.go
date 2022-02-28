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

	_, _, err := client.Collection("posts").Add(ctx, firebasePost{
		Content: "test",
		Post_date:  time.Now(),
		Title:  "test title",
	})

	if err != nil {
		log.Fatalf("Failed adding alovelace: %v", err)
	}

}

func getDocument(){
	iter := client.Collection("posts").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Fatalf("Failed to iterate: %v", err)
		}
		fmt.Println(doc.Data())
	}
}

func InitFirebaseSA() {
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
	defer client.Close()

	// addDocument();
	// getDocument();
}