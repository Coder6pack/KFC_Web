import React from 'react';

function Header() {
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8 bg-white">
        <div className="flex items-center">
          <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" className="w-32 mr-4" />
          <h3 className="mr-4">Menu</h3>
          <h3>Deals</h3>
        </div>
        <h3>Sign up</h3>
        <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="" className="w-8" />
      </nav>

      <div className="flex justify-center items-center bg-black text-white py-4 px-8">
        <h3>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h3>
        <button className="ml-4 bg-red-600 py-2 px-4 rounded-lg text-white text-lg">Start Order</button>
      </div>

      <div className="main">
        <img src="kfc.webp" alt="" className="w-full" />
      </div>

      <div className="flex justify-center mt-8">
        {/* Điền các phần tử thẻ tương tự như trên */}
      </div>
    </div>
  )
}

export default Header;
