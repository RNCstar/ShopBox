const products = [
  {
    id: 1,
    name: "Iphone12",
    price: 2000,
    img: "../img/1.png",
  },
  {
    id: 2,
    name: "Iphone13",
    price: 3500,
    img: "../img/2.webp",
  },
  {
    id: 3,
    name: "Samsung",
    price: 2700,
    img: "../img/3.jpg",
  },
];
const renderProduct = () => {
  const productsDiv = document.querySelector(".products");
  productsDiv.innerHTML = "";

  products.forEach((item, index) => {
    productsDiv.innerHTML += `<div class="product card">
              <div class="producImg">
                <img src=${item.img} class="img-fluid" alt="" />
              </div>
              <h2 class="productTitle">${item.name}</h2>
              <h2 class="productPrice">${item.price + "$"}</h2>
              <button type="button" class="btn btn-primary">
                افزودن به سبد خرید
              </button>
            </div>`;
  });
};
renderProduct();
