function Partyform() {
  return (
    <>
      <div className='w-100vw box-content h-1800 w-1800 p-4 border m-4 border-gray-700'>
        <div className='ml-12'>
          <div className=''>
            <h1 className='font-bold text-18'>Đặt tiệc</h1>
            <img
              src='https://kfcvn-static.cognizantorderserv.com/images/email/birthdaybanner.jpg'
              className='w-99'
              alt=''
            />
          </div>
          <div className=''>
            <div className='flex justify-between pt-4'>
              <div className='w-2/4'>
                <h3 className='text-red font-bold text-16 border-b border-b-grayborder w-500 '>THÔNG TIN LIÊN HỆ</h3>
                <br />
                <div className='sm:col-span-4'>
                  <label htmlFor='' className='text-16 '>
                    Họ và tên bé
                  </label>
                  <div className=''>
                    <input
                      type='text'
                      name=''
                      id=''
                      className='border-solid border-black border-b border-b-grayborder w-500 h-30'
                    />
                  </div>
                </div>
                <br />
                <div>
                  <p className='text-16'>Họ và tên người đặt *</p>
                </div>
                <div className=''>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border-solid border-black border-b border-b-grayborder w-500 h-30'
                  />
                </div>
                <br />
                <div>
                  <p className='text-16'>Số điện thoại *</p>
                </div>
                <div className=''>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border-solid border-black border-b border-b-grayborder w-500 h-30'
                  />
                </div>
                <br />
                <div>
                  <p className='text-16'>Email *</p>
                </div>
                <div className=''>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border-solid border-black border-b border-b-grayborder w-500 h-30'
                  />
                </div>
              </div>
              <div className='w-2/4'>
                <h3 className='text-red font-bold text-16 border-b-2 border-b-grayborder w-500 '>
                  THÔNG TIN BUỔI TIỆC
                </h3>
                <br />
                <div className='sm:col-span-4'>
                  <label htmlFor='' className='font-bold text-18 p-2'>
                    Loại tiệc *
                  </label>
                  <div className='p-2'>
                    <input type='radio' />
                    <label htmlFor=''> Tiệc sinh nhật </label>
                    <input type='radio' />
                    <label htmlFor=''> Tiệc liên hoan </label>
                  </div>
                </div>
                <div>
                  <p className='font-bold text-16 p-2'>Thời gian tổ chức *</p>
                </div>
                <div className='flex'>
                  <div className='p-2'>
                    <select name='ngay' id='' className='border-solid  border p-4 rounded-md border-grayborder w-120'>
                      <option value='ngay'>Ngày</option>
                      <option value=''>1</option>
                      <option value=''>2</option>
                    </select>
                  </div>
                  <div className='p-2'>
                    <select name='thang' id='' className='border-solid  border p-4 rounded-md border-grayborder w-120'>
                      <option value='thang'>Tháng</option>
                      <option value=''>1</option>
                      <option value=''>2</option>
                    </select>
                  </div>
                  <div className='p-2'>
                    <select name='nam' id='' className='border-solid  border p-4 rounded-md border-grayborder w-120'>
                      <option value='nam'>Năm</option>
                      <option value=''>1</option>
                      <option value=''>2</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className='font-bold text-16 p-2'>Số người tham dự *</p>
                </div>
                <div className='p-2'>
                  <select name='soluong' id='' className='border-solid  border p-4 rounded-md border-grayborder w-400'>
                    <option value='soluong'>Số lượng</option>
                    <option value=''>0-20</option>
                    <option value=''>21-50</option>
                    <option value=''>51+</option>
                    <option value=''>Chưa quyết định</option>
                  </select>
                </div>
                <div>
                  <p className='font-bold text-16 p-2'>Địa điểm tổ chức *</p>
                </div>
                <div className='p-2'>
                  <select name='diadiem' id='' className='border-solid  border p-4 rounded-md border-grayborder w-400'>
                    <option value='diadiem'>Tỉnh/Thành phố *</option>
                  </select>
                </div>

                <div className='p-2'>
                  <select name='diadiem' id='' className='border-solid  border p-4 rounded-md border-grayborder w-400'>
                    <option value='diadiem'>Quận/Huyện *</option>
                  </select>
                </div>

                <div className='p-2'>
                  <select name='diadiem' id='' className='border-solid  border p-4 rounded-md border-grayborder w-400'>
                    <option value='diadiem'>Nhà hàng KFC *</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center pb-2'>
            <div className='text-16 h-75'>
              <input type='checkbox' id='' name='' value='' />
              <label htmlFor=''>
                {' '}
                Tôi đã đọc và đồng ý với các{' '}
                <a href='#' className='font-bold underline'>
                  Chính Sách Hoạt Động
                </a>{' '}
                và{' '}
                <a href='#' className='font-bold underline'>
                  Chính Sách Bảo Mật Thông Tin
                </a>{' '}
                của KFC ViệtNam.
              </label>
            </div>
            <button className='border-solid border-black border-2 rounded-full p-2'>Xác Nhận Đặt Tiệc</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partyform
