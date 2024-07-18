// Add event listener to search button
document.getElementById("search-button").addEventListener("click", searchProducts);

// Function to search for products
function searchProducts() {
    const searchInput = document.getElementById("search-input");
    const searchQuery = searchInput.value.trim();
    if (searchQuery !== "") {
        // Send search query to backend API
        fetch("/search", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: searchQuery }),
        })
        .then((response) => response.json())
        .then((data) => {
            const productList = document.getElementById("product-list-container");
            productList.innerHTML = "";
            data.forEach((product) => {
                const productListItem = document.createElement("li");
                productListItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                productList.appendChild(productListItem);
            });
        })
        .catch((error) => console.error(error));
    }
}


(function() {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = carouselInner.querySelectorAll('.carousel-item');
  const carouselNav = document.querySelector('.carousel-nav');
  let currentIndex = 0;

  carouselNav.addEventListener('click', function(event) {
    if (event.target.classList.contains('carousel-prev')) {
      currentIndex -= 1;
    } else if (event.target.classList.contains('carousel-next')) {
      currentIndex += 1;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  });


})();


