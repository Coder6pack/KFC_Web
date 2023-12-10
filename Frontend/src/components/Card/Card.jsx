export default function Card() {
  return (
    <div className='w-333 border-solid border-2 border-opacity-10 border-black pb-6 rounded-sm shadow-xl'>
      <div className='w-313 h-282 p-1.5'>
        <div className='overflow-hidden'>
          <img
            className='w-313 h-272 hover:scale-110 ease-in duration-300'
            src='https://static.kfcvietnam.com.vn/images/items/lg/D6.jpg?v=gVMvQ4'
          />
        </div>
      </div>
      <div className='w-313 h-215 pb-15'>
        <div className='pt-18 px-4 pb-60'>
          <div className='flex mb-10'>
            <h3 className='flex-1 font-bold text-18'>Combo group 1</h3>
            <h3 className='flex-1 font-bold text-18 text-end'>170.000 VND</h3>
          </div>
          <p className='text-15 text-gray mb-15'>
            3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi
          </p>
        </div>
        <div className='w-313 flex justify-between items-center gap-1 px-15'>
          <button className=' flex-1 border-solid border-1 border-black h-46 rounded-3xl py-3 px-0.5'>Tuỳ chỉnh</button>
          <button className='flex-1 bg-red text-white h-46 rounded-3xl py-3 px-0.5'>Thêm</button>
        </div>
      </div>
    </div>
  )
}
