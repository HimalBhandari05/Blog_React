import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route } from 'react-router-dom'


// <Route /> yo chai component ho so argument vanejastei components ma chai props vaninxa

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1> This is a Home Page </h1>} />
        <Route path='/' element = {
          <h1> This is an index page </h1>
        } />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App