import hinh1 from './hinh1.png'
import hinh2 from './hinh2.png'
import hinh3 from './hinh3.png'
import hinh4 from './hinh4.png'
import hinh5 from './hinh5.png'
export default function Blog() {
    return (
      <>
      <div className='bg-payment'>
      <div className="w-full auto px-152 pt-120 pb-137 ">
        <div className="flex justify-between pb-64">
          <div className="text-55 font-bold">
            Our Blog & Articles
          </div>
          <div>
            <button className="w-191 h-64 border-red rounded-full bg-red text-white font-bold text-16">Read All Articles</button>
          </div>
        </div>
        <div className="flex gap-30">
          <div className="w-636 h-732 bg-white rounded-lg">
            <div className='w-636 h-486'>
            <img src={hinh1} alt="hinh1" />
            </div>
            <div className='w-568 px-25 pt-50 h-178'>
              <div className='pb-15 text-16 font-medium text-blog'>
              January 3, 2023
              </div>
              <div className='pb-15 text-22 font-bold'>
              The secret tips & tricks to prepare a perfect burger & pizza for our customers
              </div>
              <div className='text-16 font-normal leading-24 text-blog'>
              Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-30'>
            <div className='w-306 h-300  bg-white rounded-lg'>
              <div>
              <img src={hinh2} alt="hinh2" className='rounded-lg'/>
              </div>
              <div className='w-256 h-110 pt-30 px-20'>
                <div className='text-14 text-blog pb-12'>
                January 3, 2023
                </div>
                <div className='text-20 font-bold'>
                How to prepare the perfect french fries in an air fryer
                </div>
              </div>
            </div>
            <div className='w-306 h-300  bg-white rounded-lg'>
              <div>
              <img src={hinh3} alt="hinh2" className='rounded-lg'/>
              </div>
              <div className='w-256 h-110 pt-30 px-20'>
                <div className='text-14 text-blog pb-12'>
                January 3, 2023
                </div>
                <div className='text-20 font-bold'>
                How to prepare delicious chicken tenders
                </div>
              </div>
            </div>
            <div className='w-306 h-300  bg-white rounded-lg'>
              <div>
              <img src={hinh4} alt="hinh2" className='rounded-lg'/>
              </div>
              <div className='w-256 h-110 pt-30 px-20'>
                <div className='text-14 text-blog pb-12'>
                January 3, 2023
                </div>
                <div className='text-20 font-bold'>
                7 delicious cheesecake recipes you can prepare
                </div>
              </div>
            </div>
            <div className='w-306 h-300  bg-white rounded-lg'>
              <div>
              <img src={hinh5} alt="hinh2" className='rounded-lg'/>
              </div>
              <div className='w-256 h-110 pt-30 px-20'>
                <div className='text-14 text-blog pb-12'>
                January 3, 2023
                </div>
                <div className='text-20 font-bold'>
                5 great pizza restaurants you should visit this city
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      </>
    )
  }
  