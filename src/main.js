console.log("Скрипт завелся");
class Dropdown {
  constructor(element) {
    if (!element) {
      throw new Error(
        "Hey, you forgot to pass the element to the constructor!"
      );
    }

    this.container = element;
    this.toggleButton = this.container.querySelector(".dropdown-toggle");
    this.menu = this.container.querySelector(".dropdown-menu");

    this.boundToggle = this.toggle.bind(this);

    if (!this.toggleButton || !this.menu) {
      throw new Error(
        "I can't find the button or menu. Check your HTML markup, you lazy bastard"
      );
    }

    this.toggleButton.addEventListener("click", this.boundToggle);
  }

  toggle() {
    this.menu.classList.toggle("is-closed");
  }

  destroy() {
    this.toggleButton.removeEventListener("click", this.boundToggle);
    this.container.innerHTML = "";
  }
}

const allDropdowns = document.querySelectorAll(".dropdown");
allDropdowns.forEach((dropdownElement) => {
  new Dropdown(dropdownElement);
});

export default Dropdown;
