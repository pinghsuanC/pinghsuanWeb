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

type ytResponse struct {
	PlayListItem []playListItem `json:"playListItem"`
	StatusCode   int            `json:"statusCode"`
}

type twitterInfo struct {
	Data []struct {
		CreatedAt string `json:"created_at"`
		Id        string `json:"id"`
		Text      string `json:"text"`
		AuthorId  string `json:"author_id"`
	} `json:"data"`
	Includes struct {
		Users []struct {
			ID       string `json:"id"`
			Name     string `json:"name"`
			Username string `json:"username"`
		} `json:"users"`
	} `json:"includes"`
}

type twResponse struct {
	TwitterContent twitterInfo `json:"twitterContent"`
	StatusCode     int         `json:"statusCode"`
}