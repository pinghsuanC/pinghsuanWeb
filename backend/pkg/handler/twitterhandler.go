package apiHandler

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

func getTwitterData() twitterInfo {
	var err error
	var twitterContent twitterInfo

	bearer := "Bearer " + os.Getenv("TWITTER_BEARER_TOKEN");
	userId := os.Getenv("TWITTER_USER_ID");
	endpointURL := "https://api.twitter.com/2/users/"+ userId +"/tweets?tweet.fields=created_at&expansions=author_id&max_results=20";

	// create request with bearer token header
	req, _ := http.NewRequest("GET", endpointURL, nil)
	req.Header.Add("Authorization", bearer)

	// send request with client
	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		log.Fatalln(err)
	}
	defer resp.Body.Close()
	
	// decode response
	json.NewDecoder(resp.Body).Decode(&twitterContent)
	// return result
	return twitterContent
}