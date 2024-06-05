import React from 'react';
import { useParams } from 'react-router-dom';
import hotels from '../../../common/hotels.json';
import './Hotel.css';

function Hotel() {
    const { id } = useParams();
    const hotel = hotels.find(h => h.id === parseInt(id));

    if (!hotel) {
        return <div>Hotel not found</div>;
    }

    return (
        <div className='hotel-detail'>
            <div className='hotel-content'>
                <h1 className='hotel-name'>{hotel.ime}</h1>
                <div className='hotel-body'>
                    <img src={hotel.imageUrl} alt={hotel.ime} className='hotel-image' />
                    <div className='hotel-info2'>
                        <p><strong>Lokacija:</strong> {hotel.lokacija}</p>
                        <p><strong>Ocena:</strong> {hotel.ocena}</p>
                        <p><strong>Cena:</strong> ${hotel.cena}</p>
                        {hotel.staraCena && <p><strong>Stara Cena:</strong> ${hotel.staraCena}</p>}
                        <p><strong>Ukupno:</strong> ${hotel.total}</p>
                        <button className='reserve-button'>Rezerviši</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotel;