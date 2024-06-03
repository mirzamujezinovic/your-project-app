
import './App.css';
// import MySentence from './components/MySentence/MySentence'
// import Greeting from './components/Greeting/Greeting'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import HotelDetails from './pages/Hotels/Hotels/Hotel';
import Hotel from './pages/Hotels/Hotel/Hotel';
import Home from './pages/Home/Home';
function App() {

  return (
    <div className="app">
    <header>
    <div className="header">
    <Navbar/>
    </div>
    </header>
    <main className='main'>
      <h1></h1>
    <div className="hotels">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<HotelDetails/>}/>
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </div>
    
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
    //<React.Fragment/>
  )
}

export default App
