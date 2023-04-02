
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Phonebar from './components/Phonebar/Phonebar'
import PriceList from './components/PriceList/PriceList'

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
     <h2 className='text-5xl text-purple-600'>Hello from Tailwind</h2>
     <PriceList></PriceList>
     <Dashboard></Dashboard>
     <Phonebar></Phonebar>
    </div>
  )
}

export default App
