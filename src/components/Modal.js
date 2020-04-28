export default class Modal {
  constructor($target, data) {
    this.$target = $target;
    this.data = data;
    this.render();
  }

  render() {
    const { url, temperament, origin } = this.data;

    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modalContent");
    modalContent.innerHTML = "";

    modal.addEventListener("click", (ev) => {
      if (ev.target === modal) {
        modal.style.display = "none";
      }
    });
    const closeBtn = document.createElement("div");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";

    closeBtn.addEventListener("click", (ev) => {
      if (ev.target === closeBtn) {
        modal.style.display = "none";
      }
    });
    const modalImg = document.createElement("img");
    modalImg.className = "modal-img";
    modalImg.src = url;

    const modalDescription = document.createElement("div");
    modalDescription.className = "modal-description";

    const modalTemper = document.createElement("p");
    modalTemper.className = "modal-temper";
    modalTemper.innerText = temperament;

    const modalOrigin = document.createElement("p");
    modalOrigin.className = "modal-origin";
    modalOrigin.innerText = origin;

    modalDescription.appendChild(modalTemper);
    modalDescription.appendChild(modalOrigin);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalDescription);
  }
}
