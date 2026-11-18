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


function renderProducts(){
    const productlist = document.querySelector("#productList");

    productlist.innerHTML = " ";

    products.forEach(function(product){
        const formattedPrice = product.price.toLocaleString("vi-VN");

        let status = "";
        let statusClass = "";

        if(product.inStock === true){
            status ="Còn hàng";
            statusClass = "in-stock";
        }else{
            status = "Hết hàng";
            statusClass = "out-of-stock";
        }
        const productHTML = `
        <div class="product-card">
        <h2>${product.name}</h2>
        <p class = "price">Giá : ${formattedPrice} VNĐ</p>
        <p class = "${statusClass}">${status}</p>
        </div>
        `;
        productlist.innerHTML += productHTML;
    })

}
renderProducts();