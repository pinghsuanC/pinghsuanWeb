package apiHandler

import (
	"log"

	"github.com/joho/godotenv"
)

func RunHandler() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}


	getYoutubeVideos()
}
func getTwitterData()   {}
func getInstagramData() {}

