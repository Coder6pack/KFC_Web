import CategoryList from '../components/Category'
import SlideShow from '../components/SlideShow'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import Menu from '../components/Menu/Menu'
export default function Home() {
  return (
    <div>
      <SlideShow />
      <CategoryList />
      <Menu />
      <Testimonial />
      <Blog />
    </div>
  )
}
