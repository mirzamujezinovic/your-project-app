import "./Greeting.css"
function Greeting(props){
    return(
        <div className="greeting-wrapper">
            <h1 className="greeting-title">Dobrodosli u moju aplikaciju {props.nameApp}</h1>
            <h2 className="greeting-subtitle">{props.fullName}</h2>
        </div>
    )
}
export default Greeting;