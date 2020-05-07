import SearchBar from "./components/SearchBar.js";
import SearchResult from "./components/SearchResult.js";
import Modal from "./components/Modal.js";
import { api } from "./api/theCatAPI.js";
import Loading from "./components/Loading.js";

export default class App {
  constructor() {
    const body = document.body;

    const top = document.createElement("div");
    top.className = "top";

    const bottom = document.createElement("div");
    bottom.className = "bottom hidden";

    const modal = document.createElement("div");
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modalContent";

    const loader = new Loading(body);

    const onSearch = (keyword) => {
      api.fetchImage(keyword).then((result) => {
        bottom.innerHTML = "";
        searchResult.updateData(result);
        loader.toggleSpinner();
      });
    };

    const onRandomSearch = () => {
      api.fetchImageAll().then((result) => {
        searchResult.updateData(result);
        loader.toggleSpinner();
      });
    };
    const searchBar = new SearchBar(top, onSearch, onRandomSearch);
    const searchResult = new SearchResult(bottom);

    modal.appendChild(modalContent);
    body.appendChild(modal);
    body.appendChild(top);
    body.appendChild(bottom);

    document.querySelector(".search-box").focus();
  }
}
