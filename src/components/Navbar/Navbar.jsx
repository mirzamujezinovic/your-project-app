import "./Navbar.css"
import { FaServicestack } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Navbar(){
    return(
        <>
        <header>
        <div className="header">
            <div className="logo">
                <img src="https://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png" alt="slika"  />
            </div>
            <div className="info">
                <div className="search"><FaSearch /><p>Search</p></div>
                <div className="services" ><FaServicestack /><p>Services</p></div>
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