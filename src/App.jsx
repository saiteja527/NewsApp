import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsMain from './components/NewsMain'
import Footer from './components/Footer'

const App = () => {

  const [category,setCategory] = useState("general")

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsMain category={category} />
      <Footer/>
    </div>
  )
}

export default App