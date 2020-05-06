export default class Loading {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    const loader = document.createElement("div");
    loader.className = "loader";
    this.$target.appendChild(loader);
  }

  toggleSpinner() {
    const loader = document.querySelector(".loader");
    loader.classList.toggle("hidden");
    const bottom = document.querySelector(".bottom");
    bottom.classList.toggle("hidden");
  }
}
