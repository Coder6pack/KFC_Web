import Partyform from "./components/Party"
import Slideshow from "./components/slideshow"


function App() {
  return (
    <div>
      <Partyform/>
      <Slideshow autoslide={true}>
      </Slideshow>
    </div>
  )
}

export default App
