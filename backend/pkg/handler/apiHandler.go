package apiHandler

import (
	"net/http"
)


func GetYoutubeSnippet(w http.ResponseWriter) {
	videoSummaries := getYoutubeVideos()

	//normalize the data

	sendJson(w, videoSummaries)
}

func GetTwitterData(w http.ResponseWriter) {
	twitterData := getTwitterData()
	// normalize the data

	sendJson(w, twitterData)
}

func GetInstagramData() {}
