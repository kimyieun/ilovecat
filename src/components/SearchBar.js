export default class SearchBar {
  constructor($target, onSearch, onRandomSearch) {
    this.$target = $target;
    this.data = [];
    this.onSearch = onSearch;
    this.onRandomSearch = onRandomSearch;
    this.render();
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "topWrapper";

    const searchBox = document.createElement("input");
    searchBox.className = "search-box";
    searchBox.placeholder = "고양이를 검색하세요.";

    if (!this.data.length) {
      this.onRandomSearch();
    }

    searchBox.addEventListener("keyup", (ev) => {
      if (ev.keyCode === 13) {
        const keyword = searchBox.value;
        this.onSearch(keyword);

        if (!this.data.length) {
          this.onRandomSearch();
        }
      }
    });
    wrapper.appendChild(searchBox);
    this.$target.appendChild(wrapper);
  }
}
