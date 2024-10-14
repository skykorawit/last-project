import React, { useState } from 'react';

const CartPage = ({ cartItems, removeFromCart, applyDiscount, totalAmount }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    province: '',
    district: '',
    subdistrict: '',
    village: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card'); // Default payment method
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]); // Store error messages

  const handleApplyDiscount = () => {
    // Reset error messages before applying discount
    setErrorMessages([]);
    const isValidDiscount = discountCode.length > 0; // Simple validation for example

    if (!isValidDiscount) {
      setErrorMessages((prev) => [...prev, 'คูปองส่วนลดไม่ถูกต้อง']);
      return;
    }

    applyDiscount(discountCode);
  };

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmOrder = () => {
    setErrorMessages([]); // Reset error messages before confirmation

    // Check for empty cart
    if (cartItems.length === 0) {
      setErrorMessages((prev) => [...prev, 'กรุณาเพิ่มสินค้าในตะกร้าก่อนทำการสั่งซื้อ']);
      return;
    }

    // Check for incomplete customer information
    const isIncomplete = Object.values(customerInfo).some(info => info.trim() === '');
    if (isIncomplete) {
      setErrorMessages((prev) => [...prev, 'กรุณากรอกข้อมูลที่อยู่ในการจัดส่งให้ครบถ้วน']);
      return;
    }

    setOrderSuccess(true); // Open modal on successful order
  };

  const closeModal = () => {
    setOrderSuccess(false); // Close modal
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="p-6 flex-grow">
        <h2 className="text-4xl font-bold mb-6 text-green-600 text-center">รายการอาหารของคุณ</h2>
        
        {/* Cart Items */}
        <ul className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 mb-6">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b border-gray-200 py-4">
                <span className="font-medium text-lg">{item.name} - <span className="text-green-500">${item.price.toFixed(2)}</span></span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline">
                  ลบรายการอาหาร
                </button>
              </li>
            ))
          ) : (
            <li className="text-center py-4 text-red-600">ไม่มีรายการอาหารที่จะทำการสั่งซื้อ</li>
          )}
        </ul>

        {/* Discount Section */}
        <div className="flex items-center mb-6">
          <label htmlFor="discountCode" className="text-lg font-medium mr-4">คูปองส่วนลด</label>
          <input
            type="text"
            id="discountCode"
            placeholder="กรุณาใส่คูปองส่วนลด(ถ้ามี)"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 flex-1 focus:outline-none focus:border-green-500"
          />
          <button onClick={handleApplyDiscount} className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            ยืนยัน
          </button>
        </div>

        {/* Customer Information Form */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">กรุณาใส่ข้อมูลที่อยู่ในการจัดส่ง</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <input 
            type="text" 
            name="firstName" 
            placeholder="ชื่อ" 
            value={customerInfo.firstName} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="นามสกุล" 
            value={customerInfo.lastName} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            name="address" 
            placeholder="ที่อยู่" 
            value={customerInfo.address} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            name="phone" 
            placeholder="เบอร์โทร" 
            value={customerInfo.phone} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            name="province" 
            placeholder="จังหวัด" 
            value={customerInfo.province} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            name="district" 
            placeholder="ตำบล" 
            value={customerInfo.district} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            name="subdistrict" 
            placeholder="แขวง/ตำบล" 
            value={customerInfo.subdistrict} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
          <input 
            type="text" 
            name="village" 
            placeholder="หมู่บ้าน/อาคาร" 
            value={customerInfo.village} 
            onChange={handleInputChange} 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Payment Method Section */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 mt-8">เลือกวิธีการชำระเงิน</h3>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-4">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="credit-card" 
              checked={paymentMethod === 'credit-card'}
              onChange={(e) => setPaymentMethod(e.target.value)} 
              className="mr-2"
            />
            <label className="text-lg">บัตรเครดิต/บัตรเดบิต</label>
          </div>
          <div className="flex items-center mb-4">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="cash-on-delivery" 
              checked={paymentMethod === 'cash-on-delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)} 
              className="mr-2"
            />
            <label className="text-lg">เก็บเงินปลายทาง</label>
          </div>
          {/* Add more payment methods as needed */}
        </div>

        {/* Total Amount */}
        <h3 className="mt-8 text-2xl font-semibold text-gray-700">ทั้งหมด: <span className="text-green-500">${(totalAmount + 39).toFixed(2)}</span> (ค่าส่ง $39 บาท)</h3>

        {/* Confirm Order Button */}
        <button 
          onClick={handleConfirmOrder} 
          className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 w-full">
          ยืนยันรายการอาหาร
        </button>

        {/* Success Modal */}
        {orderSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-600">สั่งซื้อรายการอาหารสำเร็จ!</h3>
              <p className="mb-4">วิธีการชำระเงิน: {paymentMethod === 'credit-card' ? 'บัตรเครดิต/บัตรเดบิต' : 'เก็บเงินปลายทาง'}</p>
              <button 
                onClick={closeModal} 
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                ปิด
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Error Messages Notification */}
      {errorMessages.length > 0 && (
        <div className="fixed top-20 right-0 p-4 z-50">
          {errorMessages.map((msg, index) => (
            <div key={index} className="bg-red-500 text-white p-3 rounded-lg mb-2 shadow-md">
              {msg}
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-green-500 text-white text-center py-4">
        <p>© 2024 Healthy Food. สร้างสุขภาพที่ดีไปด้วยกัน!</p>
        <p>ติดต่อเราที่: <a href="mailto:info@healthyfood.com" className="underline">info@healthyfood.com</a></p>
      </footer>
    </div>
  );
};

export default CartPage;
