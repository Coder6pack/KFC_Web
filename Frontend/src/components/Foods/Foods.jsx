import food1 from '../../assets/images/food/food1.png'
export default function Foods() {
  return (
    <div>
      <div className='w-306'>
        <img className='rounded-t-12' src={food1} />
      </div>
      <div className='w-306 px-30 pt-30 pb-34 text-center rounded-b-12 border-x-1.5 border-b-1.5 border-categoryBorder'>
        <h3 className='text-button text-24 no-italic font-bold leading-30 tracking-0.72 mb-15'>$ 9.99</h3>
        <h3 className='mb-15 text-20 not-italic font-bold leading-26'>Fried Eggs</h3>
        <p className='no-italic font-normal leading-24'>Made with eggs, lettuce, salt, oil and other ingredients.</p>
      </div>
    </div>
  )
}
