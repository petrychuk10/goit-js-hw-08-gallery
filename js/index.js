import galleryItems from "./gallery-items.js";
import { tamplate, openModal, closeModal } from "./services.js";

const jsGallery = document.querySelector(".js-gallery");
const closeBtn = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".lightbox");

const galleryItemsMarkup = galleryItems.map((item) => tamplate(item)).join("");
jsGallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

jsGallery.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
lightbox.addEventListener("click", closeModal);
