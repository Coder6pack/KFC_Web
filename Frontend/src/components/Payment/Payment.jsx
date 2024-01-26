export default function Payment() {
  return (
    <>
      <div className='flex justify-center px-15 py-40'>
        <div className='w-846 h-978'>
          <form action='' className='w-676 relative'>
            <i className='absolute left-36 top-3'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path d='M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z' />
              </svg>
            </i>
            <h1 className='text-center text-32 font-bold'>THÔNG TIN ĐẶT HÀNG</h1>
            <div>
              <div className='relative w-676 h-87 mb-15 px-15 py-15 border-payment bg-payment'>
                <a href='#' className='absolute right-0 text-14 font-bold'>
                  Thay đổi
                </a>
                <h4 className='mb-10 text-22 font-bold'>THỜI GIAN ĐÉN NHẬN HÀNG</h4>
                Giao ngay
              </div>
              <div className='w-676 h-127 mb-15 px-15 py-15 border-payment bg-payment'>
                <h4 className='mb-10 text-22 font-bold'>NHẬN TẠI NHÀ HÀNG:</h4>
                <strong>KFC ĐƯỜNG NGUYỄN THỊ TÚ</strong>
                <br />
                <p>Địa Chỉ nhà hàng</p>
              </div>
              <div className='w-676 h-420 mb-15 px-15 py-15 border-payment bg-payment'>
                <div>
                  <h4 className='mb-10 text-22 font-bold'>THÊM THÔNG TIN CHI TIẾT</h4>
                  <div>
                    <label htmlFor='lname' className='block mb-5 text-14'>
                      Họ của bạn*
                    </label>
                    <input type='text' id='lname' name='lname' required className='w-full p-8 border-b mb-20' />
                  </div>
                  <div>
                    <label htmlFor='fname' className='block mb-5 text-14'>
                      Tên của bạn*
                    </label>
                    <input type='text' id='fname' name='fname' required className='w-full p-8 border-b mb-20' />
                  </div>
                  <div>
                    <label htmlFor='phone' className='block mb-5 text-14'>
                      Số điện thoại*
                    </label>
                    <input type='text' id='phone' name='phone' required className='w-full p-8 border-b mb-20' />
                  </div>
                  <div>
                    <label htmlFor='email' className='block mb-5 text-14'>
                      Địa chỉ Email*
                    </label>
                    <input type='email' id='email' name='email' required className='w-full p-8 border-b mb-20' />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-676 h-136 mb-15 px-15 py-15 border-payment bg-payment'>
              <h4 className='mb-10 text-22 font-bold'>PHƯƠNG THỨC THANH TOÁN:</h4>
              <button className='w-646 h-54 text-left border rounded-xl bg-black text-white pl-10'>
                Thanh toán bằng ATM/VISA/Master và Ví ZaloPay
              </button>
            </div>
            <div className='flex mb-21 pb-5 w-676 h-56'>
              <input type='checkbox' id='agree' name='agree' value='yes' className='w-22 h-20 mt-3 mr-12' />
              <label htmlFor='agree' className='text-15 mr-30'>
                Tôi đã đọc và đồng ý với các{' '}
                <a href='#' className='underline font-bold'>
                  Chính Sách Hoạt Động
                </a>{' '}
                và{' '}
                <a href='#' className='underline font-bold'>
                  Chính Sách Bảo Mật Thông Tin của KFC Việt Nam.
                </a>
              </label>
            </div>
            <div className='text-center'>
              <button className='border-xanhla text-white font-bold bg-xanhla rounded-full w-473 h-47'>Đặt hàng</button>
            </div>
          </form>
        </div>
        <div></div>
        <div></div>
        <div className='w-578 h-978 mt-56'>
          <div className='border px-35 py-35 rounded-xl'>
            <div className='w-392 h-67 pb-18'>
              <h4 className='mb-20 text-22 font-bold'>TÓM TẮT ĐƠN HÀNG:</h4>
              <div className='flex justify-between border-b'>
                <div className='mb-10 text-15 font-bold'>1x Combo Thịnh Vượng</div>
                <div className='mb-10 text-15 font-bold'>168.000đ</div>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-10'>
                <div className='text-15 '>Tổng đơn hàng</div>
                <div className='text-15 '>168.000đ</div>
              </div>
              <div className='flex justify-between'>
                <div className='font-bold'>Tổng thanh toán</div>
                <div className='font-bold'>168.000đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
