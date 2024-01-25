import CategoryList from '../components/Category'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import SlideShow from '../components/SlideShow'

export default function Home() {
  return (
    <div>
      <Header />
      <SlideShow />
      <CategoryList />
      <Menu />
      <Footer />
    </div>
  )
}
