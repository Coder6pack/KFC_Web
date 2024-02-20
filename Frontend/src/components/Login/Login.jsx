import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  const [loginForm, setLoginForm] = useState([''])
  const accountHandle = (e) => {
    setLoginForm({ ...e, email: e.target.value })
  }

  const passWordChange = (e) => {
    setLoginForm({ ...e, password: e.target.value })
  }

  const submitHandle = (e) => {
    e.preventDefault()
  }
  console.log(loginForm.email, loginForm.password)
  return (
    <>
      <div className='w-full ml-550'>
        <div className='w-780 m-50  h-auto p-20 border-payment shadow-2xl'>
          <div className='mx-112 px-15 py-60'>
            <h2 className='font-black text-28 mb-20'>ĐĂNG NHẬP</h2>
            <form action='#'>
              <label htmlFor='email' className='block mb-5'>
                Địa chỉ email của bạn
              </label>
              <input
                type='email'
                id='email'
                onChange={accountHandle}
                name='email'
                required
                className='w-full p-8 border-b mb-10'
              />
              <label htmlFor='password' className='block mb-5'>
                Mật khẩu *
              </label>
              <input
                type='password'
                id='password'
                onChange={passWordChange}
                name='password'
                required
                className='w-full p-8 border-b mb-20'
              />
              <NavLink to={'/resetpassword'} className='float-right mb-20'>
                Bạn quên mật khẩu?
              </NavLink>
              <button
                type='submit'
                onSubmit={submitHandle}
                className='w-full p-10  border rounded-full cursor-pointer hover:bg-xanhla2 bg-xanhla text-white'
              >
                Đăng nhập
              </button>
              <div className='flex flex-col text-left font-bold'>
                <p className='my-20'>Hoặc tiếp tục với</p>
                <button
                  type='button'
                  className='text-center w-full p-10 border rounded-full mb-10 block text-14 hover:facebook2 bg-facebook text-white'
                >
                  Đăng nhập bằng facebook
                </button>
                <button
                  type='button'
                  className='text-center w-full p-10 border rounded-full mb-10 block text-14 hover:apple2 bg-black text-white'
                >
                  Đăng nhập bằng apple
                </button>
                <button
                  type='button'
                  className='text-center w-full p-10 border rounded-full mb-10 block text-14 hover:google2 bg-google text-white'
                >
                  Đăng nhập bằng google
                </button>
              </div>
            </form>
            <div className='text-center mt-20 font-14'>
              Bạn chưa có tài khoản ?
              <NavLink to={'/register'} className='font-bold underline hover:no-underline'>
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
