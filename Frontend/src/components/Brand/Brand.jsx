import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import icon5 from './icon5.png'
import icon6 from './icon6.png'
import icon7 from './icon7.png'
import icon8 from './icon8.png'
import icon9 from './icon9.png'
export default function Brand() {
    return (
      <>
      <div className='bg-payment'>
      <div className="px-152 py-120 w-full h-auto gap-122 flex">
        <div className="w-346 h-213 py-50">
            <div className="pb-20 w-346 h-121 pt-50">
                <h1 className="text-55 font-bold">You can order through apps</h1>
            </div>
            <div className="text-16 font-nomarl w-346">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
            </div>
        </div>
        <div className="w-828 auto">
            <div className="flex flex-nowrap gap-24">
                <div>
                    <div className='w-230 h-200'>
                        <img src={icon1} alt="hinh9" className='w-230 h-200'/>
                    </div>
                </div>
                <div>                
                    <div className='w-230 h-200'>
                    <img src={icon2} alt="hinh9" className='w-230 h-200'/>
                    </div>
                </div>
                <div>
                    <div className='w-230 h-200'>
                        <img src={icon3} alt="hinh9" className='w-230 h-200'/>
                    </div>
                </div>
            </div>
            <div className="flex flex-nowrap gap-50 justify-between">
            <div className='w-230 h-70 bg-white rounded-lg'>
                    <img src={icon4} alt="hinh9" className='p-20'/>
                </div>
                <div className='w-230 h-70  bg-white rounded-lg'>
                    <img src={icon5} alt="hinh9" className='p-20'/>
                </div>
                <div className='w-230 h-70  bg-white rounded-lg'>
                    <img src={icon6} alt="hinh9" className='p-15 ml-15'/>
                </div>
            </div>
            <div className="flex flex-nowrap gap-24">
                <div className='w-230 h-200'>
                    <img src={icon7} alt="hinh9" className='w-230 h-200'/>
                </div>
                <div className='w-230 h-200'>
                    <img src={icon8} alt="hinh9" className='w-230 h-200'/>
                </div>
                <div className='w-230 h-200'>
                    <img src={icon9} alt="hinh9" className='w-230 h-200'/>
                </div>
            </div>
        </div>
      </div>
      </div>
     
      </>
    )
  }
  