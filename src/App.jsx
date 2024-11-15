import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/Home'
import Auth from '../src/pages/Auth'
import Landing from '../src/pages/Landing'
import Footer from '../src/components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={'true'} />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
