import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Edit from './components/edit.jsx'
import Create from './components/create.jsx'
import Blog from './components/blog.jsx'
import Navbar from './components/navbar.jsx'


// <Route /> yo chai component ho so argument vanejastei components ma chai props vaninxa

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element = { <About /> } />        
        <Route path='/edit' element = { <Edit />} />
        <Route path='/create' element = { <Create />} />
        <Route path='/blog' element = { <Blog />} />
        <Route path='/navbar' element = { <Navbar /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App