import { initializeAnimation } from "./lib/particle-animation";
import { initializeNavbarHandler } from "./lib/nav-menu";
import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  initializeAnimation();
  initializeNavbarHandler();
});
