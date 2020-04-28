import Modal from "./Modal.js";

export default class Item {
  constructor($target, onClick, data) {
    this.$target = $target;
    this.onClick = onClick;
    this.data = data;

    this.render();
  }

  render() {
    const { url } = this.data;
    const { temperament, origin } = this.data.breeds.length
      ? this.data.breeds[0]
      : { temperament: "No Information", origin: "No Information" };

    const itemWrapper = document.createElement("div");
    itemWrapper.className = "wrapper";

    const item = document.createElement("div");
    item.className = "item";

    const itemImg = document.createElement("img");
    itemImg.className = "item-img";
    itemImg.src = url;

    const itemDescription = document.createElement("div");
    itemDescription.className = "item-description";

    const itemTemper = document.createElement("p");
    itemTemper.className = "item-temper";
    itemTemper.innerText = temperament;

    const itemOrigin = document.createElement("p");
    itemOrigin.className = "item-origin";
    itemOrigin.innerText = origin;

    itemWrapper.addEventListener("click", (ev) => {
      // this.onClick(this);
      document.querySelector(".modal").style.display = "block";
      const data = { url: url, temperament: temperament, origin: origin };
      new Modal(document.querySelector(".modalContent"), data);
    });

    itemDescription.appendChild(itemTemper);
    itemDescription.appendChild(itemOrigin);
    item.appendChild(itemImg);
    item.appendChild(itemDescription);
    itemWrapper.appendChild(item);
    this.$target.appendChild(itemWrapper);
  }
}
