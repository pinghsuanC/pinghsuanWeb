package apiHandler

type playListInfo struct {
	Items []playListItem `json:"items"`
}

type playListItem struct {
	Snippet struct {
		PublishAt   string `json:"publishedAt"`
		Title       string `json:"title"`
		Description string `json:"description"`
		Thumbnails  struct {
			High struct {
				URL string `json:"url"`
			} `json:"high"`
		} `json:"thumbnails"`
		ResourceId struct {
			VideoId string `json:"videoId"`
		} `json:"resourceId"`
	} `json:"snippet"`
}