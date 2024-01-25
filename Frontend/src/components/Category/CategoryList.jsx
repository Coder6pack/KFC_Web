import Category from './Category'
export default function CategoryList() {
  return (
    <div className='px-152 pt-92 pb-120'>
      <h2 className='text-center mb-64 text-55 not-italic font-medium leading-60.5'>Browse Our Menu</h2>
      <div className='flex justify-center gap-24'>
        <Category title='Breakfast' />
        <Category title='Main Dishes' />
        <Category title='Drinks' />
        <Category title='Desserts' />
      </div>
    </div>
  )
}
