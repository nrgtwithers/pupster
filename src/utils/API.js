import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed/";
const APIKEY = "images";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};