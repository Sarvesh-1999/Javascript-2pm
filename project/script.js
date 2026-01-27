const productsContainer = document.querySelector(".products-container");
const themeBtn = document.querySelector("#themeBtn");

//! APPLY SAVED THEME
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  //! SAVE THEME
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

async function fetchAllProducts() {
  try {
    let resp = await fetch("https://dummyjson.com/products");
    let data = await resp.json();
    displayProducts(data.products);
  } catch (error) {
    console.log(error);
    displayProducts([]);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  fetchAllProducts();
});

function displayProducts(allProducts) {
  if (allProducts.length === 0) {
    productsContainer.innerHTML = `<p>Loading...</p>`;
  } else {
    const productsWrapper = document.createElement("article");
    productsWrapper.className = "wrapper";

    allProducts.map((product) => {
      let { description, id, title, price, thumbnail } = product;

      const productCard = document.createElement("div");

      productCard.className = "card";
      productCard.id = id;

      productCard.innerHTML = `
    <img src='${thumbnail}' alt = '${title}'>
    <h2>${title}</h2>
    <p>Rs.${price}</p>
    <p title='${description}'>${description.slice(0, 50)}...</p>
    <button>Add to cart</button>
    `;

      productsWrapper.append(productCard);
    });

    productsContainer.append(productsWrapper);
  }
}
