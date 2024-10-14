import React from 'react';

const healthyFoods = [
  {
    name: 'อะโวคาโด',
    benefits: 'มีไขมันที่ดีและสารอาหารที่มีประโยชน์ ดีต่อสุขภาพหัวใจ',
  },
  {
    name: 'ควินัว',
    benefits: 'มีโปรตีนสูงและไม่มีกลูเตน ดีสำหรับการสร้างพลังงาน',
  },
  {
    name: 'แซลมอน',
    benefits: 'มีกรดไขมันโอเมก้า-3 ช่วยเสริมสร้างสุขภาพสมอง',
  },
  {
    name: 'บลูเบอรี่',
    benefits: 'เต็มไปด้วยสารต้านอนุมูลอิสระ ช่วยปรับปรุงการทำงานของสมอง',
  },
  {
    name: 'ผักโขม',
    benefits: 'อุดมไปด้วยวิตามินและแร่ธาตุ ดีต่อสุขภาพกระดูก',
  },
  {
    name: 'กรีกโยเกิร์ต',
    benefits: 'มีโปรตีนและโปรไบโอติกส์สูง ดีต่อการย่อยอาหาร',
  },
  {
    name: 'มันหวาน',
    benefits: 'มีเส้นใยอาหารสูงและวิตามิน A ดีต่อสุขภาพผิว',
  },
  {
    name: 'บร็อคโคลี',
    benefits: 'เต็มไปด้วยวิตามิน C และ K ช่วยเสริมสร้างระบบภูมิคุ้มกัน',
  },
  {
    name: 'ถั่ว',
    benefits: 'มีไขมันและโปรตีนที่ดี ดีต่อสุขภาพหัวใจ',
  },
  {
    name: 'เมล็ดเจีย',
    benefits: 'มีกรดไขมันโอเมก้า-3 และเส้นใยสูง ดีต่อการให้ความชุ่มชื้น',
  },
];

const HomePage = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col">
      <div className="p-8 flex-grow">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-6 transition-transform duration-300 hover:scale-105">
          ยินดีต้อนรับสู่ Healthy Food!
        </h2>
        <p className="text-lg text-center mb-6">สั่งซื้ออาหารที่ดีที่สุดเพื่อสุขภาพของคุณ!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthyFoods.map((food, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-green-500">
                {food.name}
              </h3>
              <p className="text-gray-700">{food.benefits}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-green-500 text-white text-center py-4 mt-6 w-full">
        <p>© 2024 Healthy Food. สร้างสุขภาพที่ดีไปด้วยกัน!</p>
        <p>ติดต่อเราที่: <a href="mailto:info@healthyfood.com" className="underline">info@healthyfood.com</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
