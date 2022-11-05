import icon from "../img/travel-tour.png"
import {Link} from "react-router-dom"
import "../index.css"

export default function Header() {
    return (
        <div>
            <header>
               <nav className="navbar navbar-expand-lg sticky-top">
                  <div className="container">
                    <div>
                        <img className="navbar-brand w-50" src={icon} alt="travel-tour.png"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ms-auto" id="navbarNavDropdown">
                        <ul className="navbar-nav  ms-auto">
                            <li className="nav-item "><a className="nav-link blue" href="http://localhost:3000">Home</a></li>
                            <li className="nav-item "><a className="nav-link blue" href="#company">What's is</a></li>
                            <li className="nav-item "><a className="nav-link blue" href="#our-services">Our Services</a></li>
                            <li className="nav-item "><a className="nav-link blue" href="#lets-book-services">Let's Booking</a></li>
                            <li className="nav-item "><Link className="nav-link blue" to="dashboard">Visit TravelTour</Link></li>
                        </ul>
                    </div>
                   </div>
                </nav>
            </header>
        </div>
    )
}