import "./style.css";
import { createChevronDownIcon, createChevronUpIcon } from "./utils/Icons.js";
class Dropdown {
  constructor(element) {
    if (!element) {
      throw new Error(
        "Hey, you forgot to pass the element to the constructor!"
      );
    }

    this.container = element;

    this.toggleButton = this.container.querySelector(".dropdown__button");
    this.chevronDown = createChevronDownIcon();
    this.chevronUp = createChevronUpIcon();
    this.toggleButton.append(this.chevronDown);
    this.isOpen = false;

    this.menu = this.container.querySelector(".dropdown__menu");
    this.boundToggle = this.toggle.bind(this);

    if (!this.toggleButton || !this.menu) {
      throw new Error(
        "I can't find the button or menu. Check your HTML markup, you lazy bastard"
      );
    }

    this.toggleButton.addEventListener("click", this.boundToggle);
  }

  toggle() {
    this.menu.classList.toggle("dropdown__menu--visible");

    this.isOpen = !this.isOpen;
    const currentIcon = this.toggleButton.querySelector(".icon");

    if (this.isOpen) {
      currentIcon?.replaceWith(this.chevronUp);
    } else {
      currentIcon?.replaceWith(this.chevronDown);
    }
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
