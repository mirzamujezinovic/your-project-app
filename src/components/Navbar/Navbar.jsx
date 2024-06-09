import "./Navbar.css"
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import { FaServicestack } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BiSolidHotel } from "react-icons/bi";


function Navbar(){
    return(
        <>
        {/* https://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png */}
        <header>
        <div className="header">
            <NavLink to="/" >
            <div className="logo">
                <img src={logo} alt="slika"  />
            </div>
            </NavLink>
                <div className="info">
                <NavLink to="/hotels" className={({isActive})=>(isActive ? "active-link" : "classic-link")}>
                <div className="search"><BiSolidHotel /><p>Hotel</p></div>
                </NavLink>
                <NavLink to="/teams" className={({isActive})=>(isActive ? "active-link" : "classic-link")}>
                <div className="services" ><FaServicestack /><p>Teams</p></div>
                </NavLink>
                <div className="project" ><AiOutlineProject /><p>Projects</p></div>
                <div className="aboutus" ><GoCommentDiscussion /><p>About Us</p></div>
                <div className="contact"><MdOutlineLocalPhone /><p>Contact</p></div>
            </div>
            <div className="dugmad">
            <div className="login"><a href="#"><button>Log in</button></a></div>
            <div className="register"><a href="#"><button>Sign up</button></a></div>
            </div>
        </div>
        </header>
        </>
    )
}

export default Navbar