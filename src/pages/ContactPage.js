import React, { useState } from 'react';

const ContactPage = () => {
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    // Add your logic for sending data here
    setContactSuccess(true); // Show success message on successful submission
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-green-600 mb-4">
        <i className="fas fa-comments mr-2"></i>ติดต่อเรา
      </h2>
      <p className="text-lg mb-6 text-center">
        คุณสามารถติชมรายการอาหารของเราได้ ถ้าเราได้รับข้อความแล้วจะติดต่อกลับไป
      </p>
      
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg" onSubmit={handleSubmit}>
        <label className="block mb-2 text-lg font-semibold">
          <i className="fas fa-user mr-2"></i>ชื่อนามสกุล
        </label>
        <input 
          type="text" 
          placeholder="กรุณากรอกชื่อนามสกุล" 
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400" 
          required 
        />
        
        <label className="block mb-2 text-lg font-semibold">
          <i className="fas fa-envelope mr-2"></i>Email:
        </label>
        <input 
          type="email" 
          placeholder="กรุณากรอกอีเมล" 
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400" 
          required 
        />
        
        <label className="block mb-2 text-lg font-semibold">
          <i className="fas fa-comment-dots mr-2"></i>ข้อความ:
        </label>
        <textarea 
          placeholder="กรุณากรอกข้อความ" 
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-400" 
          required 
        ></textarea>
        
        <button 
          type="submit" 
          className="bg-green-500 text-white py-3 px-6 rounded-lg w-full hover:bg-green-600 transition duration-200"
        >
          <i className="fas fa-paper-plane mr-2"></i>ส่งข้อความติดต่อเรา
        </button>
      </form>
      
      {/* Success message */}
      {contactSuccess && <p className="mt-4 text-green-600 font-semibold text-lg">รับคำติดต่อสำเร็จ!</p>}

      {/* Footer */}
      <footer className="bg-green-500 text-white text-center py-4 mt-6 w-full">
        <p>© 2024 Healthy Food. สร้างสุขภาพที่ดีไปด้วยกัน!</p>
        <p>
          ติดต่อเราที่: <a href="mailto:info@healthyfood.com" className="underline">info@healthyfood.com</a>
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
