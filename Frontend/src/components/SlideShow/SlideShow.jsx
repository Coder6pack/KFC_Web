import slide1 from '../../assets/images/slide/slide1.png'
import Button from '../Buttons'

export default function SlideShow() {
  return (
    <div
      style={{ backgroundImage: `url(${slide1})` }}
      className='bg-cover bg-center bg-no-repeat h-729 flex justify-center'
    >
      <div className='w-729 pt-180 text-center'>
        <h1 className='text-100 leading-96 not-italic font-normal pl-27 pr-35'>Best food for your taste</h1>
        <p className='text-20 not-italic font-normal leading-8 mt-32 px-65'>
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div className='mt-40 gap-10 flex justify-center items-center'>
          <Button hover='true' content='Book A Table' />
          <Button hover='true' content='Explore Menu' />
        </div>
      </div>
    </div>
  )
}
