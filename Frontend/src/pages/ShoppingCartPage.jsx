import Header from '../components/Header'
import Footer from '../components/Footer'
import ShoppingCart from '../components/ShoppingCarts'
import CartTotal from '../components/CartTotal'
export default function ShoppingCartPage() {
  return (
    <div>
      <Header />
      <h3 className='text-center text-32 not-italic font-semibold leading-38.4 mb-32'>My Shopping Cart</h3>
      <div className='flex justify-center gap-24 mb-100'>
        <ShoppingCart />
        <CartTotal />
      </div>
      <Footer />
    </div>
  )
}
