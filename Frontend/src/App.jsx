import Slideshow from './components/slideshow/slideshow'
import Partyform from './components/Party/Partyform'
const slides = [
  'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GiangSinh.webp?v=gXDOPg',
  'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/BTLD.webp?v=gXDOPg',
  'https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/GaQueKem.webp?v=gXDOPg'
]
function App() {
  return (
    <div>
      <Partyform />
      <br />
      <Slideshow autoslide={true}>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </Slideshow>
    </div>
  )
}

export default App
