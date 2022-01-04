package apiHandler

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

type channelInfo struct {
	Items []struct{
		ContentDetails struct{
			RelatedPlaylists struct {
				Uploads string `json:"uploads"`
			} `json:"relatedPlaylists"`
		} `json:"contentDetails"`
	} `json:"items"`
}

func getYoutubeVideos() {
	// get channel info and upload list id
	respChannel, err := http.Get("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id="+os.Getenv("CHANNEL_ID")+"&key="+os.Getenv("YOUTUBE_API_TOKEN"))
	if err != nil {
		log.Fatalln(err)
	}
	defer respChannel.Body.Close()

	// decode response
	var content channelInfo
	json.NewDecoder(respChannel.Body).Decode(&content)
	uploadPlaylistId := content.Items[0].ContentDetails.RelatedPlaylists.Uploads
	
	// get playlist with id
	respUploads, err := http.Get("https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId="+uploadPlaylistId+"&key="+os.Getenv("YOUTUBE_API_TOKEN"))
	if err != nil {
		log.Fatalln(err)
	}
	defer respUploads.Body.Close()

	fmt.Print(uploadPlaylistId)



}