import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
