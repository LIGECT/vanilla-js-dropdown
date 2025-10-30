class Dropdown {
  constructor(container, options) {
    this.container = container;
    this.options = options;
    this.isOpen = false;
    this.menuElement = null;
    this.this.button = null;
    this.render();
  }

  render() {
    this.container.innerHTML = "";

    this.button = document.createElement("button");
    this.button.classList.add("dropdown-btn");
    this.button.textContent = "menu";

    this.menuElement = document.createElement("div");
    this.menuElement.className = "dropdown-menu is-closed";

    this.options.items.forEach((item) => {
      const pointsMenu = document.createElement("div");
      pointsMenu.textContent = item.text;
      this.menuElement.appendChild(pointsMenu);
    });

    this.container.append(this.button, this.menuElement);

    this.boundToggle = this.toggle.bind(this);

    this.button.addEventListener("click", boundToggle);
  }

  toggle() {
    this.menuElement.classList.toggle("is-closed");
    this.isOpen = !this.isOpen;
  }

  destroy() {
    this.button.removeEventListener("click", this.boundToggle);
    this.container.innerHTML = "";
  }
}

export default Dropdown;
