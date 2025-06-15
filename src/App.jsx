import { useState } from 'react'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'
import './App.css'
import Home from './assets/Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
