
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
     <h2 className='text-5xl text-purple-600'>Hello from Tailwind</h2>
     <PriceList></PriceList>
    </div>
  )
}

export default App
