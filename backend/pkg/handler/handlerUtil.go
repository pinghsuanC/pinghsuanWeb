package apiHandler

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

type any interface{}

// helper
func sendJson(w http.ResponseWriter, v interface{}){
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Accept")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(v)
}

func getValueFromRequest(r *http.Request, field string) any {
	params := mux.Vars(r)
	return params[field]
}