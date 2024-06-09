/* eslint-disable react/prop-types */
import "./TeamCard.css"
import { useEffect,useState } from "react"

function TeamCard(props){
    const [showMore, setShowMore] = useState(false)
    const [teamDescription, setTeamDescription] = useState("")
    
    useEffect(()=>{
        if(showMore){
            setTeamDescription("Ovaj tim ne osnovan 1925. godine. Najtrofejniji je klub u engleskoj...")
        } else{
            setTeamDescription("")
        }
    }, [showMore]);
    return(
        <div className={showMore ? "teamCard showMore" : "teamCard"} style={{ height: showMore ? 170 : 80 }}>
        <h2 className="h2">{props.name}</h2>
        <p className="p">{props.points}</p>
        <p className="p">{props.matches}</p>
        <p className="p">{props.wins}</p>
        <p className="p">{props.draws}</p>
        <p className="p">{props.losses}</p>
        <p className="p">
          <button onClick={() => setShowMore(!showMore)} className="show">
            {showMore ? "Sakrij" : "Pokaži"}
          </button>
        </p>
        {showMore && <p className="p text">{teamDescription}</p>}
      
      </div>
      
    )
    
}

export default TeamCard;