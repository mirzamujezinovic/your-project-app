import "./Hotels.css"
import hotels from "../../../common/hotels.json"
import MyKartica from "../../../components/Kartica/HotelCard/Kartica";



function HotelDetails(){
    return(
        <>
        <div className='hotels1'>
            {hotels.map((hotel)=>(
              <MyKartica
              key={hotel.id}
              imageUrl={hotel.imageUrl}
              ocena={hotel.ocena}
              ime={hotel.ime}
              lokacija={hotel.lokacija}
              cena={hotel.cena}
              staraCena={hotel.staraCena}
              total={hotel.total}
              onClick={() => (window.location.href = `/hotels/${hotel.id}`)}
              
              />
              
            ))}
          </div>
    </>
    )
}

export default HotelDetails;