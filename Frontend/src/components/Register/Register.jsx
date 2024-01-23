export default function Register() {
  return (
    <>
      <div className='w-550 h-748'>
        <div className='px-15 py-60'>
          <h1 className='text-32 font-bold mb-20'>TẠO TÀI KHOẢN</h1>
          <form>
            <div>
              <label htmlFor='fname' className='pt-8'>
                Họ của bạn *
              </label>
              <br />
              <input type='text' id='fname' name='fname' className='border-b pb-10 w-full' />
              <br />
            </div>
            <div className='pt-10'>
              <label htmlFor='lname' className=''>
                Tên của bạn *
              </label>
              <br />
              <input type='text' id='lname' name='lname' className='border-b pb-10 w-full' />
              <br />
            </div>
            <div className='pt-10'>
              <label htmlFor='phone' className=''>
                Số điện thoại *
              </label>
              <br />
              <input type='tel' id='phone' name='phone' className='border-b pb-10 w-full' />
              <br />
            </div>
            <div className='pt-10'>
              <label htmlFor='email'>Địa chỉ email của bạn</label>
              <br />
              <input type='email' id='email' name='email' className='border-b pb-10 w-full' />
              <br />
            </div>
            <div className='pt-10'>
              <label htmlFor='pwd' className=''>
                Mật khẩu *
              </label>
              <br />
              <input type='password' id='pwd' name='pwd' className='border-b pb-10 w-full' />
              <br />
            </div>
            <div className='pb-5 mb-21 flex pt-20 w-520 h-56'>
              <input type='checkbox' id='agree' name='agree' value='yes' className='w-22 h-20 mt-3 mr-12' />
              <label htmlFor='agree' className='text-15'>
                Tôi đã đọc và đồng ý với các{' '}
                <a href='#' className='underline font-bold'>
                  Chính Sách Hoạt Động
                </a>{' '}
                và{' '}
                <a href='#' className='underline font-bold'>
                  Chính Sách Bảo Mật Thông Tin của KFC Việt Nam.
                </a>
              </label>
              <br />
            </div>
            <button className='text-15 text-center border-red rounded-full bg-red w-full text-white px-2 py-12 font-bold'>
              Tạo Tài Khoản
            </button>
            <p className='text-15 text-center'>
              Bạn đã có tài khoản?{' '}
              <a href='#' className='underline font-bold'>
                Đăng nhập
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
