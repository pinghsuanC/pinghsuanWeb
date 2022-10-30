package apiHandler

import (
	"net/http"
)

// TODO: Instagram API and github API

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

func GetBlogData(w http.ResponseWriter) {
	blogData := getBlogData()
	// normalize the data
	sendJson(w, blogData)
}

func GetInstagramData() {}
