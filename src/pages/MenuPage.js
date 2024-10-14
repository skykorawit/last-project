import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const MenuPage = ({ addToCart }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const products = [
    { id: 1, name: 'ผัดผักรวมมิตรกุ้ง', description: 'เมนูเพื่อสุขภาพ คุมน้ำหนัก แคลต่ำ กินได้ทั้งครอบครัว ด้วยความกรอบของผักสัมผัสกับความเด้งของกุ้ง ทำให้เมนูนี้นอกจากอร่อยแล้วยังครบทั้งวิตามิน และโปรตีนที่ดีต่อร่างกาย ซึ่งผักที่นำมาปรุงเรายังเลือกได้ตามความชอบอีกด้วย', price: 10, image: 'v1.jpg' },
    { id: 2, name: 'ข้าวผัดไข่ ซาบะย่าง และผักสลัด', description: 'ครบทั้งคาร์โบไฮเดรต โปรตีน และไฟเบอร์ ซึ่งปลาซาบะมีคุณค่าทางโภชนาการสูง ราคาไม่แพง และยังสามารถนำไปทำอาหารได้อย่างหลากหลาย', price: 8, image: 'v2.jpg' },
    { id: 3, name: 'สลัดอกไก่โรยงา ราดน้ำสลัดญี่ปุ่น', description: 'ประกอบไปด้วยผักและเนื้อไก่ที่เป็นวัตถุดิบเพื่อสุขภาพ ครบทุกสารอาหารที่ร่างกายต้องการ อีกทั้งยังทำง่ายไม่ง้อเตา', price: 12, image: 'v3.jpg' },
    { id: 4, name: 'แกงจืดเต้าหู้หมูสับใส่ผัก', description: 'ซดน้ำแกงร้อนๆ ช่วยให้รู้สึกสดชื่นขึ้น เมนูนี้ยังเหมาะกับคนที่คุมน้ำหนักและลดคอเลสเตอรอล เพราะใช้เนื้อหมูส่วนที่ไม่ติดมันและเต้าหู้ที่มีโปรตีนสูง', price: 9, image: 'v4.jpg' },
    { id: 5, name: 'แซนวิชโฮลวีททูน่า', description: 'ทำจากขนมปังโฮลวีท ทูน่า และผักสด เป็นแซนวิชที่อุดมไปด้วยไฟเบอร์ โปรตีน และโอเมก้า 3 จากทูน่า อีกทั้งยังช่วยให้อิ่มนานขึ้น', price: 7, image: 'v5.jpg' },
    { id: 6, name: 'อกไก่ย่างและมันฝรั่งบด', description: 'เป็นเมนูอาหารเพื่อสุขภาพที่ให้โปรตีนสูงจากอกไก่และคาร์โบไฮเดรตที่ดีจากมันฝรั่ง อีกทั้งยังอิ่มท้องและให้พลังงานเพียงพอต่อการใช้ในแต่ละวัน', price: 11, image: 'v6.jpg' },
    { id: 7, name: 'สเต๊กปลาแซลมอน', description: 'ปลาแซลมอนมีไขมันดีที่ช่วยลดความเสี่ยงของโรคหัวใจและหลอดเลือด อีกทั้งยังเป็นแหล่งของโปรตีนที่ดีและกรดไขมันโอเมก้า 3', price: 15, image: 'v7.jpg' },
    { id: 8, name: 'ต้มยำกุ้งน้ำใส', description: 'ต้มยำกุ้งเป็นเมนูเพื่อสุขภาพที่ให้วิตามินและโปรตีนจากกุ้ง และสมุนไพรต่างๆ เช่น ตะไคร้ ใบมะกรูด และข่า ที่ช่วยต้านการอักเสบ', price: 10, image: 'v8.jpg' },
    { id: 9, name: 'ยำวุ้นเส้น', description: 'อุดมไปด้วยผักและโปรตีนจากกุ้งและหมูสับ เมนูนี้แคลอรี่ต่ำ เหมาะกับผู้ที่ต้องการควบคุมน้ำหนัก', price: 8, image: 'v9.jpg' },
    { id: 10, name: 'ปลานึ่งกับน้ำจิ้มซีฟู้ด', description: 'เมนูนี้เป็นการนึ่งปลาที่ให้โปรตีนจากปลาและไม่มีไขมันเกินจำเป็น น้ำจิ้มซีฟู้ดเสริมรสชาติให้จัดจ้าน อร่อยและสุขภาพดีในมื้อเดียว', price: 13, image: 'v10.jpg' },
  ];

  // Function to handle adding product to cart and showing success message
  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage(`${product.name} เพิ่มลงในตะกร้าสำเร็จ!`);
  };

  // Hide success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [successMessage]);

  return (
    <div className="flex flex-col min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-4">เมนูอาหาร</h2>

      {/* Success message display */}
      {successMessage && (
        <div className="fixed top-20 right-0 p-4 z-50">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-lg shadow-md">
            {successMessage}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {products.map(product => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4 shadow-md transition-transform duration-300 hover:scale-105">
            <ProductCard product={product} addToCart={() => handleAddToCart(product)} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-green-500 text-white text-center py-4 mt-6 w-full">
        <p>© 2024 Healthy Food. สร้างสุขภาพที่ดีไปด้วยกัน!</p>
        <p>ติดต่อเราที่: <a href="mailto:info@healthyfood.com" className="underline">info@healthyfood.com</a></p>
      </footer>
    </div>
  );
};

export default MenuPage;
