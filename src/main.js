import './style.css';
import { createChevronDownIcon, createChevronUpIcon } from './utils/Icons.js';

class Dropdown {
  constructor(element) {
    if (!element) {
      throw new Error(
        'Hey, you forgot to pass the element to the constructor!'
      );
    }

    this.container = element;
    this.toggleButton = this.container.querySelector('.dropdown__button');
    this.menu = this.container.querySelector('.dropdown__menu');
    this.menuItems = this.container.querySelectorAll('.dropdown__item');

    if (!this.toggleButton || !this.menu) {
      throw new Error(
        "I can't find the button or menu. Check your HTML markup, you lazy bastard"
      );
    }

    this.toggleButton.setAttribute('aria-haspopup', 'true');
    this.toggleButton.setAttribute('aria-expanded', 'false');

    this.chevronDown = createChevronDownIcon();
    this.chevronUp = createChevronUpIcon();
    this.toggleButton.append(this.chevronDown);
    this.isOpen = false;

    this.focusableElements = Array.from(
      this.menu.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      )
    );

    if (this.focusableElements.length === 0) {
      console.error('No focusable elements found in the menu');
    }

    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement =
      this.focusableElements[this.focusableElements.length - 1];

    this.boundToggle = this.toggle.bind(this);
    this.boundEscapeHandler = this.handlerEscape.bind(this);
    this.boundHandleTabKey = this.handleTabKey.bind(this);
    this.boundHandleOutsideClick = this.handleOutsideClick.bind(this);

    document.addEventListener('click', this.boundHandleOutsideClick);
  }

  handlerEscape(event) {
    if (event.key === 'Escape' && this.isOpen) {
      this.close();
    }
  }

  handleTabKey(event) {
    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusableElement) {
        this.lastFocusableElement.focus();
        event.preventDefault();
      }
    } else if (document.activeElement === this.lastFocusableElement) {
      this.firstFocusableElement.focus();
      event.preventDefault();
    }
  }

  handleOutsideClick(event) {
    const isToggleButton = this.toggleButton.contains(event.target);

    if (isToggleButton) {
      this.toggle();
      return;
    }

    const isClickInside = this.container.contains(event.target);

    if (this.isOpen && !isClickInside) {
      this.close();
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  destroy() {
    this.toggleButton.removeEventListener('click', this.boundToggle);
    this.container.innerHTML = '';
  }

  open() {
    this.menu.classList.add('dropdown__menu--visible');
    this.isOpen = true;
    this.toggleButton.setAttribute('aria-expanded', 'true');
    this.toggleButton.querySelector('.icon')?.replaceWith(this.chevronUp);
    document.addEventListener('keydown', this.boundEscapeHandler);
    this.container.addEventListener('keydown', this.boundHandleTabKey);
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }
  }

  close() {
    this.menu.classList.remove('dropdown__menu--visible');
    this.isOpen = false;
    this.toggleButton.setAttribute('aria-expanded', 'false');
    this.toggleButton.querySelector('.icon')?.replaceWith(this.chevronDown);
    document.removeEventListener('keydown', this.boundEscapeHandler);
    this.container.removeEventListener('keydown', this.boundHandleTabKey);
    this.toggleButton.focus();
  }
}

const allDropdowns = document.querySelectorAll('.dropdown');
allDropdowns.forEach((dropdownElement) => {
  new Dropdown(dropdownElement);
});

export default Dropdown;
