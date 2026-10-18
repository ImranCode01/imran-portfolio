import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'

export function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme-preference')
    return savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme-preference', theme)
  }, [theme])

  return (
    <>
      <BrowserRouter>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer theme={theme} />
      </BrowserRouter>
    </>
  )
}

