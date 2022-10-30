package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	apiHandler "github.com/pinghsuanC/pinghsuanWeb/backend/pkg/handler"
)

func getYoutubeSnippet(w http.ResponseWriter, r *http.Request){
	fmt.Println("Getting youtoube videos...");
	apiHandler.GetYoutubeSnippet(w)
}

func getTwitterData(w http.ResponseWriter, r *http.Request){
	fmt.Println("Getting twitter data...");
	apiHandler.GetTwitterData(w)
}

func getBlogData(w http.ResponseWriter, r *http.Request){
	fmt.Println("Getting blog data...");
	apiHandler.GetBlogData(w)
}

func welcome(w http.ResponseWriter, r *http.Request){
	fmt.Println("Entered home page");
	json.NewEncoder(w).Encode("Hit home page")
}

func main() {
	// read env variables
	os.Setenv("YOUTUBE_API_TOKEN", goDotEnvVariable("YOUTUBE_API_TOKEN"))
	os.Setenv("TWITTER_BEARER_TOKEN", goDotEnvVariable("TWITTER_BEARER_TOKEN"))
	os.Setenv("TWITTER_USER_ID", goDotEnvVariable("TWITTER_USER_ID"))
	os.Setenv("CHANNEL_ID",  goDotEnvVariable("CHANNEL_ID"))
	os.Setenv("ALL_PLAYLIST_ID",  goDotEnvVariable("ALL_PLAYLIST_ID"))
	os.Setenv("PORT",  goDotEnvVariable("PORT"))

	port, found := os.LookupEnv("PORT")
	if(!found){
		log.Fatal("No port defind")
	}

	// init router
	r := mux.NewRouter().StrictSlash(true);

	// endpoint
	r.HandleFunc("/", welcome).Methods("GET", "OPTIONS")
	r.HandleFunc("/youtube", getYoutubeSnippet).Methods("GET", "OPTIONS")
	r.HandleFunc("/twitter", getTwitterData).Methods("GET", "OPTIONS")
	r.HandleFunc("/blogs", getBlogData).Methods("GET", "OPTIONS")

	// start srever
	log.Fatal(http.ListenAndServe(":"+port, r))
}

// TODO: solve the environmental variable issue
func goDotEnvVariable(key string) string {
	// load .env file
	err := godotenv.Load();
	if err != nil {
		log.Fatal(err)
		log.Fatalf("Error loading .env file")
	}
	return os.Getenv(key)
}