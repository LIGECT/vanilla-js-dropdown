# drop-it-like-its-hot

A simple, lightweight, and customizable dropdown component built with pure JavaScript. No dependencies, zero bullshit.

## Installation

```
npm install drop-it-like-its-hot
```

## Usage

### 1. In simple HTML (via CDN or local files)

`<link rel="stylesheet" href="path/to/dist/style.css"> <script src="path/to/dist/dropdown.min.js"></script> <script> const allDropdowns = document.querySelectorAll('.dropdown'); allDropdowns.forEach(el => new Dropdown(el)); </script> `

### 2. With a modern bundler (ESM)

```
import Dropdown from 'drop-it-like-its-hot';
import 'drop-it-like-its-hot/dist/style.css';

const dropdown = new Dropdown(document.querySelector('.dropdown'));
```

### Required HTML Structure

Your HTML must follow the BEM-like structure:

```
<div class="dropdown">
  <button class="dropdown__button">Toggle Menu</button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">Action 1</a>
    <a href="#" class="dropdown__item">Action 2</a>
  </div>
</div>
```

The class dropdown**menu--visible is toggled on the .dropdown**menu element to control visibility.
