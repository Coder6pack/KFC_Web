export default function Quenmk() {
  return (
    <>
      <div className='m-50 w-500'>
        <div className='w-500 h-34 text-right'>
          <button className=''>X</button>
        </div>
        <div className='w-500 h-297 text-center'>
          <ul className=''>
            <li className='text-26 font-bold'>
              <p>Bạn quên mật khẩu</p>
            </li>
            <li className='text-22 font-bold'>
              <p>Đừng lo lắng, bạn có thể đặt lại dễ dàng</p>
            </li>
            <li className='pb-25 text-15'>
              <p>Chúng tôi sẽ gửi cho bạn một email có thể liên kết để đặt lại mật khẩu của bạn</p>
            </li>
            <li>
              <p className='text-left pb-5'>Địa chỉ email của bạn*</p>
            </li>
            <li className='pb-30'>
              <input type='email' id='email' name='email' className='border-b w-full' />
              <br />
            </li>
            <li>
              <button className='text-15 text-center border-red rounded-full bg-red w-full text-white px-2 py-12 font-bold'>
                Gửi Email Đặt Lại Mật Khẩu
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
