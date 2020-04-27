import SearchBar from "./components/SearchBar.js";
import SearchResult from "./components/SearchResult.js";
import { api } from "./api/theCatAPI.js";

export default class App {
  constructor() {
    console.log("App is created!");

    const body = document.body;
    const top = document.createElement("div");
    top.className = "top";

    const bottom = document.createElement("div");
    bottom.className = "bottom";

    const onsearch = (keyword) => {
      api.fetchImage(keyword).then((result) => {
        searchResult.updateData(result);
      });
    };
    const searchBar = new SearchBar(top, onsearch);
    const searchResult = new SearchResult(bottom);

    body.appendChild(top);
    body.appendChild(bottom);
  }
}
