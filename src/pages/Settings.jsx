import { Outlet, Link } from "react-router-dom"
import Footer from "../components/Footer"
import "../index.css"

export default function Settings() {
    return (
        <div className="bg-settings m-auto">
            <div className="container">
                <div className="row">
                     <div className="col-8 p-3">
                            <Outlet />
                     </div>

                     <div className="col-4 my-5">
                          <ul className="list-unstyled ">
                            <li className="text-decoration-none"><Link className="nav-link blue" to="/settings">Personal Data</Link></li>
                            <li className="text-decoration-none"><Link className="nav-link blue" to="/settings/other">Other</Link></li>
                            <li className="text-decoration-none"><Link className="nav-link blue" to="/dashboard">Back</Link></li>
                          </ul>
                     </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
