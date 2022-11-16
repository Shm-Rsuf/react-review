import React from "react";

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Mobile", price: 250 },
    { id: 3, name: "Television", price: 200 },
    { id: 4, name: "Radio", price: 100 },
  ];

  const productsList = products.map((product) => (
    <h3 key={product.id}>
      {product.name} : ${product.price}
    </h3>
  ));

  return <div>{productsList}</div>;
}

export default Products;
