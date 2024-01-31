import Image1 from './Image1.jpg'
import Image2 from './Image2.jpg'
import Image3 from './Image3.jpg'
export default function Testimonial() {
    return (
      <>
      <div className='ml-300'>
        <div className="w-1296 h-533 px-152 pt-98 pb-135">
            <div className="text-center">
                <h1 className='text-55 font-bold'>What Our Customers Say</h1>
            </div>
            <div className="flex nowarp justify-center gap-24 ">
                <div className="w-416 h-408 pt-45 px-35 bg-payment">
                    <h4 className="pb-24 font-bold text-red">"The best restaurant"</h4>
                    <div className="pb-32 text-18 font-normal w-346 leading-28">
                    Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                    </div>
                    <div className="pt-32 flex gap-20 border-t ">
                        <div><img src={Image1} alt="hinh1" /></div>
                        <div className='m-10'>
                            <p className='font-bold'>Sophire Robson</p>
                            <p>Los Angeles, CA</p>
                        </div>
                    </div>
                </div>
                <div className="w-416 h-408 pt-45 px-35 bg-payment">
                    <h4 className="pb-24 font-bold text-red">“Simply delicious”</h4>
                    <div className="pb-32 text-18 font-normal w-346 leading-28">
                    Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
                    </div>
                    <div className="pt-32 flex gap-20 border-t">
                        <img src={Image2} alt="hinh2" />
                        <div className='m-10'>
                            <p className='font-bold'>Matt Cannon</p>
                            <p>San Diego, CA</p>
                        </div>
                    </div>
                </div>
                <div className="w-416 h-408 pt-45 px-35 bg-payment">
                    <h4 className="pb-24 font-bold text-red">“One of a kind restaurant”</h4>
                    <div className="pb-32 text-18 font-normal w-346 leading-28">
                    The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.
                    </div>
                    <div className="pt-32 flex gap-20 border-t">
                        <img src={Image3} alt="hinh3" />
                        <div className='m-10'>
                            <p className='font-bold'>Andy Smith</p>
                            <p>San Francisco,CA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        
      </>
    )
  }
  