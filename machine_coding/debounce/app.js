const inputDiv = document.getElementById('input');
let timeOut;

const fetchProducts = async (e) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${e.target.value}`
  );
  const { products } = await response.json();
  console.log(products);
};

const debounced = (e) => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    fetchProducts(e);
  }, 1000);
};

inputDiv.addEventListener('input', debounced);
