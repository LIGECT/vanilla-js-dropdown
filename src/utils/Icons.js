import { createElement, ChevronDown, ChevronUp } from "lucide";

function createChevronDownIcon() {
  const icon = createElement(ChevronDown);
  icon.classList.add("icon", "chevron-down");
  return icon;
}

function createChevronUpIcon() {
  const icon = createElement(ChevronUp);
  icon.classList.add("icon", "chevron-up");
  return icon;
}

export { createChevronDownIcon, createChevronUpIcon };
