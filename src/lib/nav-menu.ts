const dropdown = document.querySelector("#dropdown") as HTMLInputElement;
const nav = document.querySelector("nav")!;

export function initializeNavbarHandler() {
  nav.addEventListener("click", handleDropdownClick);
}

function handleDropdownClick(e: MouseEvent) {
  if (!e.target || (e.target as HTMLElement).tagName !== "A") return;
  if ((e.target as HTMLElement).dataset.logo) window.scrollTo({ top: 0 });
  dropdown.checked = false;
}
