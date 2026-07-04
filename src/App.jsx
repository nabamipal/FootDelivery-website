import {useState} from 'react'
import Navbar2 from './assets/Component/Navbar2'
import Hero from './assets/Component/Hero'
import HeadLinesCard from './assets/Component/HeadLinesCard'
import Food from './Components/Food'
import Category from './Components/Category'



function App() {

  return (
   <div>
     <Navbar2/>
    <Hero/>
    <HeadLinesCard/>
    <Food/>
    <Category/>
   </div>
  )
}

export default App

