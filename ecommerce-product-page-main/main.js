const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const navbar = document.getElementById("navbar");

openMenuBtn.addEventListener("click", () => {
  navbar.classList.add("toggle");
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  navbar.classList.remove("toggle");
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
});

const cartButton = document.getElementById("cart-btn");
const cartDropdown = document.getElementById("cart-dropdown");

const mainImage = document.getElementById("main-image");

const lightboxMainImage = document.getElementById("lightbox-main-image");
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.getElementById("close-lightbox");

const lightboxNextBtn = document.getElementById("lightbox-next-btn");
const lightboxPreviousBtn = document.getElementById("lightbox-previous-btn");

cartButton.addEventListener("click", () => {
  if (cartDropdown.classList.contains("active") === true) {
    cartDropdown.classList.remove("active");
  } else {
    cartDropdown.classList.add("active");
  }
});

mainImage.addEventListener("click", () => {
  if (lightbox.classList.contains("show-lightbox") === true) {
    lightbox.classList.remove("show-lightbox");
  } else {
    lightbox.classList.add("show-lightbox");
    lightboxMainImage.src = mainImage.src;
    if (
      mainImage.src != lightboxThumbnail1.src.replace(/-thumbnail.jpg/g, ".jpg")
    ) {
    }
    switch (mainImage.src) {
      case lightboxThumbnail1.src.replace(/-thumbnail.jpg/g, ".jpg"):
        lightboxThumbnail1.classList.add("active-image");
        lightboxThumbnail2.classList.remove("active-image");
        lightboxThumbnail3.classList.remove("active-image");
        lightboxThumbnail4.classList.remove("active-image");
        break;
      case lightboxThumbnail2.src.replace(/-thumbnail.jpg/g, ".jpg"):
        lightboxThumbnail2.classList.add("active-image");
        lightboxThumbnail1.classList.remove("active-image");
        lightboxThumbnail3.classList.remove("active-image");
        lightboxThumbnail4.classList.remove("active-image");
        break;
      case lightboxThumbnail3.src.replace(/-thumbnail.jpg/g, ".jpg"):
        lightboxThumbnail3.classList.add("active-image");
        lightboxThumbnail2.classList.remove("active-image");
        lightboxThumbnail1.classList.remove("active-image");
        lightboxThumbnail4.classList.remove("active-image");
        break;
      case lightboxThumbnail4.src.replace(/-thumbnail.jpg/g, ".jpg"):
        lightboxThumbnail4.classList.add("active-image");
        lightboxThumbnail2.classList.remove("active-image");
        lightboxThumbnail1.classList.remove("active-image");
        lightboxThumbnail3.classList.remove("active-image");
        break;
    }
  }
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show-lightbox");
});

// IMAGE FUNCTIONALITY

const thumbanail1 = document.getElementById("thumbnail1");
const thumbanail2 = document.getElementById("thumbnail2");
const thumbanail3 = document.getElementById("thumbnail3");
const thumbanail4 = document.getElementById("thumbnail4");

thumbanail1.addEventListener("click", () => {
  if (mainImage.src != thumbanail1.src.replace(/-thumbnail.jpg/g, ".jpg")) {
    mainImage.src = "./images/image-product-1.jpg";
    thumbanail1.classList.add("active-image");
    thumbanail2.classList.remove("active-image");
    thumbanail3.classList.remove("active-image");
    thumbanail4.classList.remove("active-image");
  }
});

thumbanail2.addEventListener("click", () => {
  if (mainImage.src != thumbanail2.src.replace(/-thumbnail.jpg/g, ".jpg")) {
    mainImage.src = "./images/image-product-2.jpg";
    thumbanail2.classList.add("active-image");
    thumbanail1.classList.remove("active-image");
    thumbanail3.classList.remove("active-image");
    thumbanail4.classList.remove("active-image");
  }
});

thumbanail3.addEventListener("click", () => {
  if (mainImage.src != thumbanail3.src.replace(/-thumbnail.jpg/g, ".jpg")) {
    mainImage.src = "./images/image-product-3.jpg";
    thumbanail3.classList.add("active-image");
    thumbanail1.classList.remove("active-image");
    thumbanail2.classList.remove("active-image");
    thumbanail4.classList.remove("active-image");
  }
});

thumbanail4.addEventListener("click", () => {
  if (mainImage.src != thumbanail4.src.replace(/-thumbnail.jpg/g, ".jpg")) {
    mainImage.src = "./images/image-product-4.jpg";
    thumbanail4.classList.add("active-image");
    thumbanail1.classList.remove("active-image");
    thumbanail2.classList.remove("active-image");
    thumbanail3.classList.remove("active-image");
  }
});

// LIGHTBOX IMAGE FUNCTIONALITY

const lightboxThumbnail1 = document.getElementById("lightbox-thumbnail1");
const lightboxThumbnail2 = document.getElementById("lightbox-thumbnail2");
const lightboxThumbnail3 = document.getElementById("lightbox-thumbnail3");
const lightboxThumbnail4 = document.getElementById("lightbox-thumbnail4");

lightboxThumbnail1.addEventListener("click", () => {
  if (
    lightboxMainImage.src !=
    lightboxThumbnail1.src.replace(/-thumbnail.jpg/g, ".jpg")
  ) {
    lightboxMainImage.src = "./images/image-product-1.jpg";
    lightboxThumbnail1.classList.add("active-image");
    lightboxThumbnail2.classList.remove("active-image");
    lightboxThumbnail3.classList.remove("active-image");
    lightboxThumbnail4.classList.remove("active-image");
  }
});

lightboxNextBtn.addEventListener("click", () => {
  switch (lightboxMainImage.src) {
    case lightboxThumbnail1.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/1.jpg/g, "2.jpg");
      lightboxThumbnail1.classList.remove("active-image");
      lightboxThumbnail2.classList.add("active-image");
      break;
    case lightboxThumbnail2.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/2.jpg/g, "3.jpg");
      lightboxThumbnail2.classList.remove("active-image");
      lightboxThumbnail3.classList.add("active-image");
      break;
    case lightboxThumbnail3.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/3.jpg/g, "4.jpg");
      lightboxThumbnail3.classList.remove("active-image");
      lightboxThumbnail4.classList.add("active-image");
      break;
    case lightboxThumbnail4.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/4.jpg/g, "1.jpg");
      lightboxThumbnail4.classList.remove("active-image");
      lightboxThumbnail1.classList.add("active-image");
      break;
  }
});

lightboxPreviousBtn.addEventListener("click", () => {
  switch (lightboxMainImage.src) {
    case lightboxThumbnail1.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/1.jpg/g, "4.jpg");
      lightboxThumbnail1.classList.remove("active-image");
      lightboxThumbnail4.classList.add("active-image");
      break;
    case lightboxThumbnail2.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/2.jpg/g, "1.jpg");
      lightboxThumbnail2.classList.remove("active-image");
      lightboxThumbnail1.classList.add("active-image");
      break;
    case lightboxThumbnail3.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/3.jpg/g, "2.jpg");
      lightboxThumbnail3.classList.remove("active-image");
      lightboxThumbnail2.classList.add("active-image");
      break;
    case lightboxThumbnail4.src.replace(/-thumbnail.jpg/g, ".jpg"):
      lightboxMainImage.src = lightboxMainImage.src.replace(/4.jpg/g, "3.jpg");
      lightboxThumbnail4.classList.remove("active-image");
      lightboxThumbnail3.classList.add("active-image");
      break;
  }
});

lightboxThumbnail2.addEventListener("click", () => {
  if (
    lightboxMainImage.src !=
    lightboxThumbnail2.src.replace(/-thumbnail.jpg/g, ".jpg")
  ) {
    lightboxMainImage.src = "./images/image-product-2.jpg";
    lightboxThumbnail2.classList.add("active-image");
    lightboxThumbnail1.classList.remove("active-image");
    lightboxThumbnail3.classList.remove("active-image");
    lightboxThumbnail4.classList.remove("active-image");
  }
});

lightboxThumbnail3.addEventListener("click", () => {
  if (
    lightboxMainImage.src !=
    lightboxThumbnail3.src.replace(/-thumbnail.jpg/g, ".jpg")
  ) {
    lightboxMainImage.src = "./images/image-product-3.jpg";
    lightboxThumbnail3.classList.add("active-image");
    lightboxThumbnail1.classList.remove("active-image");
    lightboxThumbnail2.classList.remove("active-image");
    lightboxThumbnail4.classList.remove("active-image");
  }
});

lightboxThumbnail4.addEventListener("click", () => {
  if (
    lightboxMainImage.src !=
    lightboxThumbnail4.src.replace(/-thumbnail.jpg/g, ".jpg")
  ) {
    lightboxMainImage.src = "./images/image-product-4.jpg";
    lightboxThumbnail4.classList.add("active-image");
    lightboxThumbnail1.classList.remove("active-image");
    lightboxThumbnail2.classList.remove("active-image");
    lightboxThumbnail3.classList.remove("active-image");
  }
});

const sliderNextBtn = document.getElementById("slider-next-btn");
const sliderPreviousBtn = document.getElementById("slider-previous-btn");

sliderNextBtn.addEventListener("click", () => {
  switch (mainImage.src) {
    case thumbanail1.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/1.jpg/g, "2.jpg");
      break;
    case thumbanail2.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/2.jpg/g, "3.jpg");
      break;
    case thumbanail3.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/3.jpg/g, "4.jpg");
      break;
    case thumbanail4.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/4.jpg/g, "1.jpg");
      break;
  }
});

sliderPreviousBtn.addEventListener("click", () => {
  switch (mainImage.src) {
    case thumbanail1.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/1.jpg/g, "4.jpg");
      break;
    case thumbanail2.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/2.jpg/g, "1.jpg");
      break;
    case thumbanail3.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/3.jpg/g, "2.jpg");
      break;
    case thumbanail4.src.replace(/-thumbnail.jpg/g, ".jpg"):
      mainImage.src = mainImage.src.replace(/4.jpg/g, "3.jpg");
      break;
  }
});

// COUNTER

const counterLabel = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

counterLabel.innerText = count;

increaseBtn.addEventListener("click", () => {
  if (count < 10) {
    count += 1;
  }
  counterLabel.innerText = count;
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
  }
  counterLabel.innerText = count;
});

// ADD TO CART

const addToCartBtn = document.getElementById("add-to-cart-btn");
const cartLabel = document.getElementById("cart-label");
const checkout = document.getElementById("checkout");
const emptyCart = document.getElementById("empty-cart");

addToCartBtn.addEventListener("click", () => {
  if (count != 0) {
    cartLabel.style.display = "block";
    cartLabel.innerText = count;
    checkout.style.display = "flex";
    emptyCart.style.display = "none";
    document.getElementById("checkout-count").innerText = count;
    document.getElementById("checkout-total").innerText =
      " $" + count * 125 + ".00";
  }
});

// DELETE CART

const deleteCartBtn = document.getElementById("checkout-delete");

deleteCartBtn.addEventListener("click", () => {
  count = 0;
  cartLabel.innerText = count;
  counterLabel.innerText = count;
  cartLabel.style.display = "none";
  checkout.style.display = "none";
  emptyCart.style.display = "grid";
});
