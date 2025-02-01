const API_URL =
  "https://api.unsplash.com/photos/random?count=5&query=products&client_id=ACCESS_KEY";

const mainImage = document.getElementById("main-image");
const thumbnailsContainer = document.getElementById("thumbnails");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productDescription = document.getElementById("product-description");
const quantityInput = document.getElementById("quantity");
const quantityMinus = document.querySelector(".quantity-minus");
const quantityPlus = document.querySelector(".quantity-plus");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const addToCartButton = document.getElementById("add-to-cart");
const confirmationMessage = document.getElementById("confirmation-message");

let images = [];
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

async function fetchImages() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    images = data.map((item) => ({
      url: item.urls.regular,
      description: item.description || "No Product Name",
    }));
    renderCarousel();
    updateProductInfo(0);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function renderCarousel() {
  if (images.length === 0) return;
  mainImage.src = images[currentIndex].url;
  thumbnailsContainer.innerHTML = "";
  images.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.url;
    thumbnail.classList.toggle("active", index === currentIndex);
    thumbnail.addEventListener("click", () => {
      updateMainImage(index);
      updateProductInfo(index);
    });
    thumbnailsContainer.appendChild(thumbnail);
  });
}

function updateMainImage(index) {
  currentIndex = index;
  mainImage.src = images[currentIndex].url;
  renderCarousel();
}

function updateProductInfo(index) {
  const product = images[index];
  productName.textContent = product.description;
  productDescription.textContent =
    product.alt_description || "No Product Description";
  productPrice.textContent = `₹ ${(Math.random() * 1000).toFixed(2)}`;
}

quantityMinus.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

quantityPlus.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderCarousel();
  updateProductInfo(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  renderCarousel();
  updateProductInfo(currentIndex);
});

addToCartButton.addEventListener("click", () => {
  confirmationMessage.classList.remove("hidden");
  setTimeout(() => confirmationMessage.classList.add("hidden"), 3000);
});

mainImage.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

mainImage.addEventListener("touchmove", (e) => {
  touchEndX = e.touches[0].clientX;
});

mainImage.addEventListener("touchend", () => {
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > swipeThreshold) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else if (swipeDistance < -swipeThreshold) {
    currentIndex = (currentIndex + 1) % images.length;
  }

  renderCarousel();
  updateProductInfo(currentIndex);
}

fetchImages();
