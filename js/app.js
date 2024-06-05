const products = [
  {
    id: 1,
    name: "iPhone 12",
    price: 2000,
    image: "../img/1.png",
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 3500,
    image: "../img/2.webp",
  },
  {
    id: 3,
    name: "Samsung",
    price: 2600,
    image: "../img/3.jpg",
  },
];

const renderProducts = () => {
  const productDiv = document.querySelector(".products");
  productDiv.innerHTML = "";

  products.forEach((item, index) => {
    productDiv.innerHTML += `
        <div class="product card">
            <div class="producImg">
                <img src=${item.image}>
            </div>
            <h2 class="productTitle">${item.name}</h2>
            <h3 class="productPrice">${item.price} $</h3>
            <button class="btn btn-primary" onclick="addToCart(${index})">افزودن به سبد خرید</button>
        </div>
        `;
  });
};

let cart = {
  items: [],
  total: 0,
};

const renderCartItems = () => {
  const cartDiv = document.querySelector(".cartItems");
  cartDiv.innerHTML = "";

  const totalPriceEl = document.querySelector(".cartTotalPrice");

  let totalPrice = 0;

  if (cart.items.length === 0) {
    cartDiv.innerHTML = "محصولی در سبد خرید وجود ندارد!";
  }

  cart.items.forEach((item) => {
    totalPrice += item.total;
    cartDiv.innerHTML += `
        <div class="cartItem">
            <div class="col-md-4">
                <button class="btn btn-danger" onclick="removeFormCart('${item.name}')">حذف</button>
            </div>
            <div class="col-md-4 p-8">
                <div class="qty">${item.qty}</div>
            </div>
            <div class="col-md-4">
                <h3 class="cartItemTitle">${item.name}</h3>
            </div>
        </div>
        `;
  });

  totalPriceEl.innerHTML = `مجموع: ${totalPrice} $`;
};

const addToCart = (productIndex) => {
  const product = products[productIndex];

  let existingProduct = false;

  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name === product.name) {
      existingProduct = true;

      const newItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price,
      };

      return [...state, newItem];
    }

    return [...state, item];
  }, []);

  if (!existingProduct) {
    newCartItems.push({
      ...product,
      qty: 1,
      total: product.price,
    });
  }

  cart = {
    ...cart,
    items: newCartItems,
  };
  renderCartItems();
};
const removeFormCart = (productName) => {
  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name === productName) {
      const newItem = {
        ...item,
        qty: item.qty - 1,
        total: (item.qty - 1) * item.price,
      };

      if (newItem.qty > 0) {
        return [...state, newItem];
      } else {
        return state;
      }
    }

    return [...state, item];
  }, []);

  cart = {
    ...cart,
    items: newCartItems,
  };
  renderCartItems();
};
renderProducts();
renderCartItems();
