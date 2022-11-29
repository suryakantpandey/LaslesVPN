import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Acheivement from './components/Acheivement/Acheivement'
import Featrues from './components/Features/Features'
import Plans from './components/Plans/Plans'
import Map from './components/Map/Map'
import Sponsers from './components/Sponsers/Sponsers'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className='card'>
      <Navbar/>
      <Jumbotron/>
      <Acheivement/>
      <Featrues/>
      <Plans/>
      <Map/>
      <Sponsers/>
      <Footer/>
    </div>
  )
}

export default App
