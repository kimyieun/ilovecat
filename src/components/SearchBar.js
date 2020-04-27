export default class SearchBar {
  constructor($target, onsearch) {
    this.$target = $target;
    this.data = [];
    this.onsearch = onsearch;
    this.render();
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "topWrapper";

    const searchBox = document.createElement("input");
    searchBox.className = "search-box";
    searchBox.placeholder = "고양이를 검색하세요.";

    //type some words in searchbox
    searchBox.addEventListener("keyup", (ev) => {
      if (ev.keyCode === 13) {
        const keyword = searchBox.value;
        this.onsearch(keyword);
      }
    });
    wrapper.appendChild(searchBox);
    this.$target.appendChild(wrapper);
  }
}
