fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    console.log("\nTASK 1 - Save Product Count ");

    let productCount = products.length;
    console.log("Total Product : ", productCount);

    console.log("\nTASK 2 - Display Products Name ");
    products.forEach((product) => {
      console.log(product.title);
    });

    console.log("\nTASK 3 - Display Products Below $100 ");
    let below100 = products.filter((product) => {
      return product.price < 100;
    });
    below100.forEach((product) => {
      console.log(product.title + " - $" + product.price);
    });

    console.log("\nTASK 4 - Display Products Above $100 ");
    let above100 = products.filter((product) => {
      return product.price > 100;
    });
    above100.forEach((product) => {
      console.log(product.title + " - $" + product.price);
    });

    console.log("\nTASK 5 - Show Category ");
    products.forEach((product) => {
      console.log("Product : ", product.title);
      console.log("Category : ", product.category);
      console.log("");
    });

    console.log("\nTASK 6 - Display Rating ");
    products.forEach((product) => {
      console.log("Product : ", product.title);
      console.log("Rating : ", product.rating.rate);
      console.log("");
    });

    console.log("\nTASK 7 - Product Search ");

    let search = prompt("Enter Product Name").toLowerCase();

    let found = false;

    products.forEach((product) => {
      if (product.title.toLowerCase().includes(search)) {
        console.log("Product : ", product.title);
        console.log("Price : $", product.price);
        console.log("Category : ", product.category);
        console.log("");
        found = true;
      }
    });
    if (!found) {
      console.log("Product Not Found");
    }

    console.log("\nTASK 8 - Electronics Products ");

    let electronics = products.filter((product) => {
      return product.category === "electronics";
    });

    electronics.forEach((product) => {
      console.log("Product : ", product.title);
      console.log("Price : $", product.price);
      console.log("Category : ", product.category);
      console.log("");
    });

    console.log("\nTASK 9 - Men's Clothing ");

    let menClothing = products.filter((product) => {
      return product.category === "men's clothing";
    });

    menClothing.forEach((product) => {
      console.log("Product : ", product.title);
      console.log("Price : $", product.price);
      console.log("Category : ", product.category);
      console.log("");
    });

    console.log("\nTASK 10 - Women's Clothing ");

    let womenClothing = products.filter((product) => {
      return product.category === "women's clothing";
    });

    womenClothing.forEach((product) => {
      console.log("Product : ", product.title);
      console.log("Price : $", product.price);
      console.log("Category : ", product.category);
      console.log("");
    });

    console.log("\nTASK 11 - Jewellery Products ");

    let jewellery = products.filter((product) => {
      return product.category === "jewelery";
    });

    jewellery.forEach((product) => {
      console.log("Product : ", product.title);
      console.log("Price : $", product.price);
      console.log("Category : ", product.category);
      console.log("");
    });

    console.log("\nTASK 12 - Show First 5 Products ");

    let firstFive = products.slice(0, 5);

    firstFive.forEach((product) => {
      console.log("ID : ", product.id);
      console.log("Product : ", product.title);
      console.log("");
    });

    console.log("\nTASK 13 - Show Last 5 Products ");

    let lastFive = products.slice(15, 20);
    // let lastFive = products.slice(-5); //  --> if don't know about the array length

    lastFive.forEach((product) => {
      console.log("ID : ", product.id);
      console.log("Product : ", product.title);
      console.log("");
    });

    console.log("\nTASK 14 - Add Serial Number ");

    products.forEach((product, index) => {
      console.log("Index : ", index + 1);
      console.log("Title : ", product.title);
      console.log("");
    });

    console.log("\nTASK 15 - Long Description ");

    products.forEach((product) => {
      console.log("Product : ", product.title);

      if (product.description.length > 100) {
        console.log(
          "Description : ",
          product.description.slice(0, 100) + " Read More...",
        );
      } else {
        console.log("Description : ", product.description);
      }

      console.log("");
    });

    console.log("\nTASK 16 - Highest Rated Product ");

    let highestRated = products.reduce((highest, product) => {
      return product.rating.rate > highest.rating.rate ? product : highest;
    });

    console.log("Product : ", highestRated.title);
    console.log("Price : $", highestRated.price);
    console.log("Category : ", highestRated.category);
    console.log("Rating : ", highestRated.rating.rate);

    console.log("\nTASK 17 - Cheapest Product ");

    let cheapestProduct = products.reduce((cheapest, product) => {
      return product.price < cheapest.price ? product : cheapest;
    });

    console.log("Product : ", cheapestProduct.title);
    console.log("Price : $", cheapestProduct.price);
    console.log("Category : ", cheapestProduct.category);
    console.log("Rating : ", cheapestProduct.rating.rate);

    console.log("\nTASK 18 - Costliest Product ");

    let costliestProduct = products.reduce((costliest, product) => {
      return product.price > costliest.price ? product : costliest;
    });

    console.log("Product : ", costliestProduct.title);
    console.log("Price : $", costliestProduct.price);
    console.log("Category : ", costliestProduct.category);
    console.log("Rating : ", costliestProduct.rating.rate);
  })

  .catch((error) => {
    console.log("\nTASK 19 - Error Page ");

    console.log("Unable to Load Products");
    console.log("Please try again later");

    // To see actual error
    // console.error(error);
  });
