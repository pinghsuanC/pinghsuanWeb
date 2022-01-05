package apiHandler

import (
	"net/http"
)


func GetYoutubeSnippet(w http.ResponseWriter) {
	videoSummaries := getYoutubeVideos()
	sendJson(w, videoSummaries)
}


func GetTwitterData()   {}
func GetInstagramData() {}
