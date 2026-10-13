import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'

export function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

