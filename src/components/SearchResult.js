import Item from "./Item.js";

export default class SearchResult {
  constructor($target) {
    this.$target = $target;
    this.data = [];
  }

  updateData(data) {
    this.data = data;
    this.render();
  }

  render() {
    const itemGroupWrapper = document.createElement("div");
    itemGroupWrapper.className = "GroupWrapper";

    const itemGroup = document.createElement("div");
    itemGroup.className = "item-group";

    this.data.forEach((cat) => {
      new Item(itemGroup, null, cat);
    });

    itemGroupWrapper.appendChild(itemGroup);
    this.$target.appendChild(itemGroupWrapper);

    console.log(document.querySelectorAll("img.lazy"));
  }
}
