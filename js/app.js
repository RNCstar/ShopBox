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

let cart = {
  items: [],
  total: 0,
};

const renderItems = () => {
  const cartDiv = document.querySelector(".cartItems");
  cartDiv.innerHTML = "";
  const totalPriceEL = document.querySelector(".cartTotalPrice");
  let totalPrice = 0;
  if (cart.items.length === 0) {
    cartDiv.innerHTML = "هیجی هنوز نخریدی";
  }
  cart.items.forEach((item) => {
    totalPrice += item.total;
    cartDiv.innerHTML += `<div class="cartItem">
                <div class="col-md-4">
                  <button type="button" class="btn btn-danger">حذف</button>
                </div>
                <div class="col-md-4 p-8">
                  <div class="qty">${item.qty}</div>
                </div>
                <div class="col-md-4">
                  <h3 class="cartItemTitle">${item.name}</h3>
                </div>
              </div>`;
  });
  totalPriceEL.innerHTML = `مجموع کل : ${totalPrice} $`;
};

const addToCart = (productIndex) => {
  const product = products[productIndex];
  let existingProduct = false;
  const newCartItem = cart.items.reduce((state, item) => {
    if (item.name === product.name) {
      existingProduct = true;
      const newItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price,
      };
    }
  }, []);
};

renderProduct();
renderItems();
