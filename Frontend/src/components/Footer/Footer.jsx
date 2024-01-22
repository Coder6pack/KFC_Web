export default function Footer() {
  return (
    <>
      <div className='flex flex-nowrap justify-between color bg-denthui text-white pt-120 pb-85 px-152 w-full'>
        <div className=''>
          <div className='flex flex-col '>
            <div className='mb-30 '>
              <img
                src='https://i.pinimg.com/originals/35/7d/b1/357db15b9f94e58e5783d8e2313604df.png'
                className='w-50'
                alt=''
              />
            </div>
            <div className='mb-30 '>yummy@bistrobliss</div>
            <div className='flex flex-nowrap mb-30'>
              <button className='m-2'> fb </button>
              <button className='m-2'> fb </button>
            </div>
          </div>
        </div>
        <div className='flex flex-nowrap w-330 gap-120 text-16 not-italic'>
          <ul className=''>
            <li className='font-bold mb-40'>Page</li>

            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
          </ul>
          <ul className=''>
            <li className='font-bold mb-40'>Page</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>Home</li>
          </ul>
        </div>
        <div className='w-403'>
          <div className='mb-40'>Follow Us On Instagram</div>
          <div className='flex flex-wrap'>
            <div className=''>
              <img src='../../../food1.png' alt='hinh 1' />
            </div>
            <div>
              <img src='../../assets/images/footer1.png' alt='hinh 2' />
            </div>
            <div>
              <img src='./food3.png' alt='hinh 3' />
            </div>
            <div>
              <img src='./food4.png' alt='hinh4' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
