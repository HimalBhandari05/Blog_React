import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import Edit from './pages/edit.jsx'
import Create from './pages/create.jsx'
import Blog from './pages/blog.jsx'
import LearningUseState from './pages/learningUseState.jsx'
import CardDetail from './pages/components/CardDetail.jsx'
import DeleteBlog from './pages/components/DeleteBlog.jsx'
import LearnReact from './pages/components/One.jsx'
import LearnCrud from './pages/components/CrudOperation.jsx'


function App() {
  const [count, setCount] = useState(0);
  const [posts , setPosts] = useState([]);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cardDetails' element={ <CardDetail /> } />
        <Route path="/cardDetails/:id" element={ <CardDetail /> } />
        <Route path='/about' element = { <About /> } />        
        <Route path='/edit/:id' element = { <Edit />} />
        <Route path='/edit' element = { <Edit />} />
        <Route path='/create' element = { <Create />} />
        <Route path='/blog' element = { <Blog />} />
        <Route path='/useState' element={ <LearningUseState /> } />
        <Route path='/learn' element={ <LearnReact /> } />
        <Route path='/learnCrud/:id' element={ <LearnCrud />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App