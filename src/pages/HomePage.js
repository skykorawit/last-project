import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-green-400 to-green-600 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-white py-20">
        <h1 className="text-6xl font-bold mb-4 transition-transform duration-500 ease-in-out transform hover:scale-110">
          Healthy Food
        </h1>
        <p className="text-2xl mb-8">สั่งซื้ออาหารที่ดีที่สุดเพื่อสุขภาพของคุณ!</p>
        <Link
          to="/menu"
          className="bg-white text-green-600 py-3 px-8 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-200 transition-all duration-300 transform hover:scale-105"
        >
          สั่งอาหารตอนนี้
        </Link>
      </section>

      {/* Featured Section */}
      <section className="py-12 circular-gradient text-center">
  <h2 className="text-4xl text-green-700 font-bold mb-6">เมนูยอดนิยม</h2>
  <p className="text-lg text-gray-700 mb-6">สุขภาพดีเริ่มต้นจากอาหารที่ดี!</p>
  <div className="flex flex-col space-y-6 px-8">
    {/* Sample Healthy Food Items with Alternating Images */}
    <div className="flex items-center">
      <img
        src="v1.jpg"
        alt="อะโวคาโด"
        className="w-1/3 rounded-lg shadow-lg mr-4"
      />
      <div className="w-2/3 text-left bg-gradient-to-b from-green-100 to-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold text-green-600">ผัดผักรวมมิตรกุ้ง</h3>
        <p className="text-gray-700 mt-2">
          เมนูเพื่อสุขภาพ คุมน้ำหนัก แคลต่ำ กินได้ทั้งครอบครัว ด้วยความกรอบของผักสัมผัสกับความเด้งของกุ้ง ทำให้เมนูนี้นอกจากอร่อยแล้วยังครบทั้งวิตามิน และโปรตีนที่ดีต่อร่างกาย ซึ่งผักที่นำมาปรุงเรายังเลือกได้ตามความชอบอีกด้วย
        </p>
      </div>
    </div>
    <div className="flex items-center flex-row-reverse">
      <img
        src="v2.jpg"
        alt="แซลมอน"
        className="w-1/3 rounded-lg shadow-lg ml-4"
      />
      <div className="w-2/3 text-left bg-gradient-to-b from-green-100 to-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold text-green-600">ข้าวผัดไข่ ซาบะย่าง และผักสลัด</h3>
        <p className="text-gray-700 mt-2">
          ครบทั้งคาร์โบไฮเดรต โปรตีน และไฟเบอร์ ซึ่งปลาซาบะมีคุณค่าทางโภชนาการสูง ราคาไม่แพง และยังสามารถนำไปทำอาหารได้อย่างหลากหลาย
        </p>
      </div>
    </div>
    <div className="flex items-center">
      <img
        src="v3.jpg"
        alt="ควินัว"
        className="w-1/3 rounded-lg shadow-lg mr-4"
      />
      <div className="w-2/3 text-left bg-gradient-to-b from-green-100 to-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold text-green-600">สลัดอกไก่โรยงา ราดน้ำสลัดญี่ปุ่น</h3>
        <p className="text-gray-700 mt-2">
          ประกอบไปด้วยผักและเนื้อไก่ที่เป็นวัตถุดิบเพื่อสุขภาพ ครบทุกสารอาหารที่ร่างกายต้องการ อีกทั้งยังทำง่ายไม่ง้อเตา
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6">
        <p>© 2024 Healthy Food. สร้างสุขภาพที่ดีไปด้วยกัน!</p>
        <p>
          ติดต่อเราที่: <a href="mailto:info@healthyfood.com" className="underline">info@healthyfood.com</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
