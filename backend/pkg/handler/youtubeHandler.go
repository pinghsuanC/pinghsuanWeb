package apiHandler

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

func getYoutubeVideos() ytResponse {
	var resPlayListItems *http.Response
	var err error
	var playlistContent playListInfo

	// get playlist items snippet by playlist id
	resPlayListItems, err = http.Get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId="+os.Getenv("ALL_PLAYLIST_ID")+"&key="+os.Getenv("YOUTUBE_API_TOKEN"))
	if err != nil {
		log.Println(err)
		return ytResponse{ PlayListItem: []playListItem{}, StatusCode: 500 }
	}
	defer resPlayListItems.Body.Close()
	
	// decode response
	json.NewDecoder(resPlayListItems.Body).Decode(&playlistContent)
	responseStatus := resPlayListItems.StatusCode;

	// pre-processing
	for k :=0; k<len(playlistContent.Items); k++  {
		playlistContent.Items[k].Snippet.Type = "youtube";
		playlistContent.Items[k].Snippet.CreatedOn = playlistContent.Items[k].Snippet.PublishAt;
	}
	// return result
	return ytResponse{ PlayListItem: playlistContent.Items, StatusCode: responseStatus }
}