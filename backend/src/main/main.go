package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	apiHandler "github.com/pinghsuanC/pinghsuanWeb/backend/pkg/handler"
)

func getAll(w http.ResponseWriter, r *http.Request){
	// get data and return 3 cleaned array
	
}

func main() {
	// read env variables
	os.Setenv("YOUTUBE_API_TOKEN", goDotEnvVariable("YOUTUBE_API_TOKEN"))
	os.Setenv("CHANNEL_ID",  goDotEnvVariable("CHANNEL_ID"))

	// init router
	r := mux.NewRouter()
	
	// endpoint
	r.HandleFunc("/getAll", getAll).Methods("Get")
	apiHandler.RunHandler()

	// start srever
	log.Fatal(http.ListenAndServe(":8000", nil))
}

// TODO: solve the environmental variable issue
func goDotEnvVariable(key string) string {
	// load .env file
	err := godotenv.Load("../../.env")
	if err != nil {
		log.Fatal(err)
		log.Fatalf("Error loading .env file")
	}
	return os.Getenv(key)
}