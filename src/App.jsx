
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import HotelDetails from './pages/Hotels/Hotels/Hotels';
import Hotel from './pages/Hotels/Hotel/Hotel';
import Home from './pages/Home/Home';
import Teams from './pages/Teams/Teams';


function App() {

  return (
    <div className="app">
    <header>
    <div className="header">
    <Navbar/>
    </div>
    </header>
    <main className='main'>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<HotelDetails/>}/>
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path='/teams' element={<Teams/>}/>
      </Routes>
    
    
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
    //<React.Fragment/>
  )
}

export default App
