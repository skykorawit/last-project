import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalAmount(totalAmount + product.price);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    const removedItem = cartItems.find(item => item.id === id);
    setCartItems(updatedCart);
    setTotalAmount(totalAmount - (removedItem ? removedItem.price : 0));
  };

  const applyDiscount = (code) => {
    if (code === 'DISCOUNT10') {
      setTotalAmount(totalAmount * 0.9);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} applyDiscount={applyDiscount} totalAmount={totalAmount} />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

<footer className="bg-green-600 text-white text-center py-4">
        <p>© 2024 Healthy Food. สร้างสุขภาพที่ดีไปด้วยกัน!</p>
      </footer>

export default App;
