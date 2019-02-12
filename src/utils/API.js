import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed/";
const APIKEY = "/images";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  searchPuppy: function() {
      return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};