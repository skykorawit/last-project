import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../stylemenu.css'; // ปรับเส้นทางตามโครงสร้างโฟลเดอร์ของคุณ

const MenuPage = ({ addToCart }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const products = [
    { id: 1, name: 'ผัดผักรวมมิตรกุ้ง', description: 'เมนูเพื่อสุขภาพ...', price: 10, image: 'v1.jpg' },
    { id: 2, name: 'ข้าวผัดไข่ ซาบะย่าง และผักสลัด', description: 'ครบทั้งคาร์โบไฮเดรต...', price: 8, image: 'v2.jpg' },
    { id: 3, name: 'สลัดอกไก่โรยงา ราดน้ำสลัดญี่ปุ่น', description: 'ประกอบไปด้วยผักและเนื้อไก่...', price: 12, image: 'v3.jpg' },
    { id: 4, name: 'แกงจืดเต้าหู้หมูสับใส่ผัก', description: 'ซดน้ำแกงร้อนๆ...', price: 9, image: 'v4.jpg' },
    { id: 5, name: 'แซนวิชโฮลวีททูน่า', description: 'ทำจากขนมปังโฮลวีท...', price: 7, image: 'v5.jpg' },
    { id: 6, name: 'อกไก่ย่างและมันฝรั่งบด', description: 'เป็นเมนูอาหารเพื่อสุขภาพ...', price: 11, image: 'v6.jpg' },
    { id: 7, name: 'สเต๊กปลาแซลมอน', description: 'ปลาแซลมอนมีไขมันดี...', price: 15, image: 'v7.jpg' },
    { id: 8, name: 'ต้มยำกุ้งน้ำใส', description: 'ต้มยำกุ้งเป็นเมนูเพื่อสุขภาพ...', price: 10, image: 'v8.jpg' },
    { id: 9, name: 'ยำวุ้นเส้น', description: 'อุดมไปด้วยผัก...', price: 8, image: 'v9.jpg' },
    { id: 10, name: 'ปลานึ่งกับน้ำจิ้มซีฟู้ด', description: 'เมนูนี้เป็นการนึ่งปลา...', price: 13, image: 'v10.jpg' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage(`${product.name} เพิ่มลงในตะกร้าสำเร็จ!`);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gradient-to-b from-green-300 to-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-800">เมนูอาหาร</h2>

      {successMessage && (
        <div className="fixed top-20 right-0 p-4 z-50">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-lg shadow-md">
            {successMessage}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {products.map(product => (
          <div key={product.id} className="transition-transform duration-300 hover:scale-105"> {/* กำจัด shadow ที่นี่ */}
            <ProductCard product={product} addToCart={() => handleAddToCart(product)} />
          </div>
        ))}
      </div>

      <footer className="bg-green-600 text-white text-center py-4 mt-6 w-full">
        <p>© 2024 Healthy Food. สร้างสุขภาพที่ดีไปด้วยกัน!</p>
        <p>ติดต่อเราที่: <a href="mailto:info@healthyfood.com" className="underline">info@healthyfood.com</a></p>
      </footer>
    </div>
  );
};

export default MenuPage;
