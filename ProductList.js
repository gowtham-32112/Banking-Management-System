import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productName) => {
    setCart([...cart, productName]);
  };

  const handleRemoveFromCart = (productName) => {
    const updatedCart = cart.filter((item) => item !== productName);
    setCart(updatedCart);
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, productName) => {    
      const product = products.find((p) => p.name === productName);
      return total + (product ? product.price : 0);
    }, 0);
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: 'red',
    color: 'black',
    padding: '10px',
    textAlign: 'center',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  };

  const buttonStyle = {
    backgroundColor: 'red',
    color: 'black',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>Product List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name}>
              <td style={tdStyle}>
                <strong>{product.name}</strong>
              </td>
              <td style={tdStyle}>${product.price}</td>
              <td style={tdStyle}>
                <button
                  onClick={() => handleAddToCart(product.name)}
                  style={buttonStyle}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Cart</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((productName, index) => {
            const product = products.find((p) => p.name === productName);
            return (
              <tr key={index}>
                <td style={tdStyle}>{productName}</td>
                <td style={tdStyle}>${product ? product.price : 0}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleRemoveFromCart(productName)}
                    style={buttonStyle}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>Total Cost: ${calculateTotalCost()}</p>
    </div>
  );
};

export default ProductList;