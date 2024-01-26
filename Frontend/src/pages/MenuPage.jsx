import Menu from '../components/Menu'
import Button from '../components/Buttons'

const title = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Breakfast' },
  { id: 3, name: 'Main Dishes' },
  { id: 4, name: 'Drinks' },
  { id: 5, name: 'Desserts' }
]
export default function MenuPage() {
  return (
    <div>
      <div className='m-auto w-780'>
        <h1 className='mb-20 px-163 text-center text-100 no-italic font-normal leading-96'>Our Menu</h1>
        <p className='px-111.5 text-18 not-italic font-normal leading-7 text-center text-menuTitle'>
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
        <div className='flex justify-center items-center gap-10 mt-50 mb-88'>
          {title.map((val) => (
            <Button content={val.name} hover='true' width='w-120' height='h-12' key={val.id} />
          ))}
        </div>
      </div>
      <Menu />
    </div>
  )
}
