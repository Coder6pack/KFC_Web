//import { useEffect, useState } from 'react'

export default function Slideshow() {
  const slides = [
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GiangSinh.webp?v=gXDOPg',
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/BTLD.webp?v=gXDOPg',
    'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GaQueKem.webp?v=gXDOPg'
  ]
  //const [curr, setCurr] = useState(0)

  //const prev = () => setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1))
  //const next = () => setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1))
  //useEffect(() => {
    //if (!autoslide) return
    //const slideInterval = setInterval(next, autoslideInterval)
    //return () => clearInterval(slideInterval)
  //}, [])
  //{slides.map((s) => (
    //<img src={s} />
  //))}
  return (
    <>
      <div className='overflow-hidden relative'>
        <div
          className='flex'
          //transition-transform ease-out duration-500'
          //style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GiangSinh.webp?v=gXDOPg" alt="" />
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button  className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
            Back
          </button>
          <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
            Next
          </button>
        </div>
      </div>
    </>
  )
}
