import "./Hotels.css"
import hotels from "../../../common/hotels.json"
import MyKartica from "../../../components/Kartica/HotelCard/Kartica";
import Pagination from "../../../components/Pagination/Pagination";
import { useState } from "react";



function HotelDetails(){
    const [page, setPage] = useState(1)
    const numOfHotelsPerPage = 8

    const numOfHotels = hotels.length
    const numOfPages = Math.ceil(numOfHotels / 8)
    console.log(numOfPages)

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
              
            )).slice(numOfHotelsPerPage * (page - 1), numOfHotelsPerPage * page)
              //.slice(0,8) prikazivanje prvih 8 hotela 11111111
              //.slice(8,16) prikazivanje drugih 8 hotela 22222222
              //.slice(16,24) prikazivanje trecih 8 hotela 33333333
            }

          </div>
          <Pagination numOfPages={numOfPages} page={page} setPage={setPage} />
    </>
    )
}

export default HotelDetails;