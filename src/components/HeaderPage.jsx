import { Link } from "react-router-dom"
import { Login } from "../pages/Login"
import { SignIn } from "../pages/SignIn"
import icon from "../img/travel-tour.png"
import "../index.css"

export default function HeaderPage() {

    return (
        <div>
            <header>
               <nav className="navbar navbar-expand-lg sticky-top">
                   <div className="container-fluid">
                        <div className="m-0 p-0">
                            <img className="navbar-brand w-50 m-0" src={icon} alt="travel-tour.png"/>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse ms-auto" id="navbarNavDropdown">
                           <form className="d-flex" role="search">
                                <input className="form-control me-2" name="search"type="search" placeholder="hotel, tourist, and etx" aria-label="Search" />
                                <button className="btn btn-outline-info" type="submit">Search</button>
                           </form>

                           <div className="btn-group me-5 ms-auto">
                            <button className="btn btn-sm dropdown-toggle blue" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Log In/Sign Up
                            </button>
                            <ul className="dropdown-menu">
                                <li className="p-2 list-option-settings" data-bs-toggle="modal" data-bs-target="#ModalSignIn"><i className="fa-solid fa-font-awesome"></i> Sign In</li>
                                <li className="p-2 list-option-settings" data-bs-toggle="modal" data-bs-target="#ModalLogin"><i className="fa-solid fa-right-to-bracket"></i> Log In</li>
                                <hr />
                                <li className="p-2 list-option-settings"><Link className="nav-link" to="/settings"><i className="fa-solid fa-gear"></i> Settings</Link></li>
                            </ul>
                        </div>
                        </div>                      
                    </div>                   
                </nav>

                <SignIn />
                <Login />
            </header>
        </div>
    )
}