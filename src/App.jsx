
import './App.css';
import MyKartica from './components/Kartica/Kartica';
// import MySentence from './components/MySentence/MySentence'
// import Greeting from './components/Greeting/Greeting'
import hotels from "./common/hotels.json"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
    <div className="app">
    <header>
    <div className="header">
    <Navbar/>
    </div>
    </header>
    <main>
    <div className="hotels">
    {
    hotels.map((hotel)=>(
      <MyKartica
      key={hotel.id}
      imageUrl={hotel.imageUrl}
      ocena={hotel.ocena}
      ime={hotel.ime}
      lokacija={hotel.lokacija}
      cena={hotel.cena}
      staraCena={hotel.staraCena}
      total={hotel.total}

      />

    )
  )
    }
  </div>
  
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
    </>
  )
}

export default App
