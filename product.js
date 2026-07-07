let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    allProducts = products;
    displayProducts(products);
  })
  .catch((error) => {
    document.getElementById("products").innerHTML = `
    <div class="error">
      <h2>Unable to Load Products</h2>
      <p>Please try again later</p>
    </div>
  `;

    console.error(error);
  });
function displayProducts(products) {
  let productDiv = document.getElementById("products");

  productDiv.innerHTML = "";

  document.getElementById("count").innerText = products.length;

  if (products.length === 0) {
    productDiv.innerHTML = "<h2>No Products Found</h2>";
    return;
  }

  products.forEach((product) => {
    productDiv.innerHTML += `
      <div class="card">

        <img src="${product.image}" alt="${product.title}">

        <h3>${product.title}</h3>

        <p><b>Category :</b> ${product.category}</p>

        <p><b>Price :</b> $${product.price}</p>

        <p><b>Rating :</b> ⭐ ${product.rating.rate}</p>

        <button>Buy Now</button>

      </div>
    `;
  });
}

// Common Filter Function

function filterProducts() {
  let search = document.getElementById("search").value.toLowerCase();
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;

  let filteredProducts = allProducts.filter((product) => {
    let searchMatch = product.title.toLowerCase().includes(search);

    let categoryMatch = category === "all" || product.category === category;

    let priceMatch = price === "all" || product.price < Number(price);

    return searchMatch && categoryMatch && priceMatch;
  });

  displayProducts(filteredProducts);
}

// Search

document.getElementById("search").addEventListener("keyup", filterProducts);

// Category

document.getElementById("category").addEventListener("change", filterProducts);

// Price

document.getElementById("price").addEventListener("change", filterProducts);
