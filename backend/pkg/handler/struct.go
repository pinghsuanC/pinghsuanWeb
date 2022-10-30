package apiHandler

import "time"

type playListInfo struct {
	Items []playListItem `json:"items"`
}

type playListItem struct {
	Snippet struct {
		PublishAt   string `json:"publishedAt"`
		CreatedOn   string `json:"createdOn"`
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
		Type string `json:"type"`
	} `json:"snippet"`
}

type ytResponse struct {
	PlayListItem []playListItem `json:"playListItem"`
	StatusCode   int            `json:"statusCode"`
}

type twitterInfo struct {
	Data []struct {
		CreatedAt string `json:"created_at"`
		CreatedOn string `json:"createdOn"`
		Id        string `json:"id"`
		Text      string `json:"text"`
		AuthorId  string `json:"author_id"`
		Type 	  string `json:"type"`
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

type blogInfo struct {
	Content string `json:"content"`
	Post_date time.Time `json:"post_date"`
	Title string `json:"title"`
	Type string `json:"type"`
	CreatedOn string `json:"createdOn"`
}

type blogResponse struct {
	BlogContentList []blogInfo `json:"blogInfo"`
	StatusCode int `json:"statusCode"`
}