import { Route } from "react-router-dom";
import "./Kartica.css"
import { MdLocalHotel } from "react-icons/md";
function MyKartica(props){
    return(
        <>
        <div className="hotel-kartica">
        <div className="photo">
            <img src={props?.imageUrl}/>
        </div>
        <div className="hotel-info">
        <div className="ocena"><strong>{props?.ocena}/10 </strong>Exceptional (317 reviews)</div>
        <div className="hotel-ime">{props?.ime}</div>
        <div className="lokacija">{props?.lokacija}</div>
        <div className="cena">${props?.cena} <span className="stara-cena">{props?.staraCena}$</span></div>
        <div className="total-cena">${props?.total} total includes taxes & fees</div>
        <button className="card-price" onClick={props.onClick}>
        <MdLocalHotel />Show hotel
        </button>
        
    </div>
    </div> 
    </>
    )
}

export default MyKartica;