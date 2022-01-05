package apiHandler

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

func getYoutubeVideos() []playListItem {
	var resPlayListItems *http.Response
	var err error
	var playlistContent playListInfo

	// get playlist items snippet by playlist id
	resPlayListItems, err = http.Get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+os.Getenv("ALL_PLAYLIST_ID")+"&key="+os.Getenv("YOUTUBE_API_TOKEN"))
	if err != nil {
		log.Fatalln(err)
	}
	defer resPlayListItems.Body.Close()
	// decode response
	json.NewDecoder(resPlayListItems.Body).Decode(&playlistContent)
	// return result
	return playlistContent.Items
}