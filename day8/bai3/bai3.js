const products = [
  {
    id: 1,
    name: "Bàn phím cơ",
    price: 850000,
    inStock: true
  },
  {
    id: 2,
    name: "Chuột không dây",
    price: 450000,
    inStock: true
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth",
    price: 1200000,
    inStock: false
  },
  {
    id: 4,
    name: "Màn hình 27 inch",
    price: 4200000,
    inStock: true
  }
];

// BÀI 2: Render danh sách sản phẩm
function renderProducts() {
  const productList = document.querySelector("#productList");

  productList.innerHTML = "";

  products.forEach(function (product) {
    const formattedPrice = product.price.toLocaleString("vi-VN");

    let status = "";
    let statusClass = "";

    if (product.inStock === true) {
      status = "Còn hàng";
      statusClass = "in-stock";
    } else {
      status = "Hết hàng";
      statusClass = "out-of-stock";
    }

    const productHTML = `
      <div class="product-card">
        <h2>${product.name}</h2>
        <p class="price">Giá: ${formattedPrice} VNĐ</p>
        <p class="${statusClass}">${status}</p>
      </div>
    `;

    productList.innerHTML += productHTML;
  });
}

// BÀI 3: Đếm số lượng sản phẩm
function updateProductCount() {

  // Bước 1: Tìm các phần tử HTML
  const totalElement = document.querySelector("#totalCount");
  const inStockElement = document.querySelector("#inStockCount");
  const outOfStockElement = document.querySelector("#outOfStockCount");

  // Bước 2: Đếm tổng sản phẩm
  const total = products.length;

  // Bước 3: Lọc các sản phẩm còn hàng
  const availableProducts = products.filter(function (product) {
    return product.inStock === true;
  });

  // Bước 4: Đếm sản phẩm còn hàng
  const inStockCount = availableProducts.length;

  // Bước 5: Tính số sản phẩm hết hàng
  const outOfStockCount = total - inStockCount;

  // Bước 6: Cập nhật giao diện
  totalElement.textContent = total;
  inStockElement.textContent = inStockCount;
  outOfStockElement.textContent = outOfStockCount;
}

// Khởi tạo giao diện
renderProducts();
updateProductCount();
