export default function Category() {
  return (
    <a className='m-auto block cursor-pointer w-324 border-solid rounded-10'>
      <div className='rounded-t-10 overflow-hidden h-272'>
        <img
          className='h-272 rounded-t-10 hover:scale-110 ease-in duration-400'
          src='https://static.kfcvietnam.com.vn/images/category/lg/KHUYEN%20MAI.jpg?v=LK8kB4'
        />
      </div>
      <div className='text-19 py-10 px-3 border-grayborder border-2 border-opacity-10 rounded-b-10'>
        <a className='block text-black font-bold'>Ưu Đãi</a>
      </div>
    </a>
  )
}
