import SearchBar from "./components/SearchBar.js";
import SearchResult from "./components/SearchResult.js";
import { api } from "./api/theCatAPI.js";

export default class App {
  constructor() {
    const body = document.body;

    const top = document.createElement("div");
    top.className = "top";

    const bottom = document.createElement("div");
    bottom.className = "bottom";

    const onSearch = (keyword) => {
      api.fetchImage(keyword).then((result) => {
        while (bottom.firstChild) bottom.removeChild(bottom.lastChild);
        searchResult.updateData(result);
      });
    };

    const onRandomSearch = () => {
      api.fetchImageAll().then((result) => {
        searchResult.updateData(result);
      });
    };
    const searchBar = new SearchBar(top, onSearch, onRandomSearch);
    const searchResult = new SearchResult(bottom);

    body.appendChild(top);
    body.appendChild(bottom);
  }
}
