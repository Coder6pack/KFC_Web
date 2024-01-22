import CartTotal from '../components/CartTotal'
import CategoryList from '../components/Category'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import ShoppingCart from '../components/ShoppingCarts/ShoppingCart'
import SlideShow from '../components/SlideShow'

export default function Home() {
  return (
    <div>
      <Header />
      <SlideShow />
      <CategoryList />
      <Menu />
      <ShoppingCart />
      <CartTotal />
      <Footer />
    </div>
  )
}
