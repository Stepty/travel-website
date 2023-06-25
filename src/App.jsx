import './App.css'
import Carousel from'./Carousel.jsx'
import Navbar from './Navbar.jsx'
import Content from './Content.jsx'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Content />
        <Carousel />
      </main>
    </>
  )
}

export default App
