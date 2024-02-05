import CategoryList from '../components/Category'
import Menu from '../components/Menu'
import SlideShow from '../components/SlideShow'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
export default function Home() {
  return (
    <div>
      <SlideShow />
      <CategoryList />
      <Menu />
      <Testimonial/>
      <Blog/>
    </div>
  )
}
