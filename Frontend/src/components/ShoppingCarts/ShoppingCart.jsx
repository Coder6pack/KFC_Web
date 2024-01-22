import Button from '../Buttons'
import Cart from '../Cart'

export default function ShoppingCart() {
  return (
    <div className='w-872 pl-20 pt-16 border border-categoryBorder rounded-lg '>
      <div className='flex border-b border-b-categoryBorder mb-20'>
        <h3 className='mr-314'>Product</h3>
        <h3 className='mr-73'>Price</h3>
        <h3 className='mr-125'>Quantity</h3>
        <h3 className=''>Subtotal</h3>
      </div>
      <Cart />
      <Cart />
      <Cart />
      <Button content='Back to Home' />
    </div>
  )
}
