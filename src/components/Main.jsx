import "../index.css"
import profile from "../img/company-profile.png"
import web from "../img/lets-go.png"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button'; 

export default function Main() {
    return (
        <div>
            <main className="">
                <section className="dashboard">
                   <h1 className="dashboard-title">Enjoy Your Holiday in Peace and Happiness</h1>
                </section>

                <section className="company-profile" id="company">
                     <div className="container">
                        <h1 className="my-5 title-section">#What's is Travel Tour</h1>

                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <img src={profile} alt="company-profile.png"/>
                            </div>

                            <div className="col-xl-6 col-md-12 mx-auto my-auto">
                                    <p className="text-justify">
                                        Travel Tour is a website which avaliable the holiday service trust
                                        and has been widely used by tourists so you can holiday funny and
                                        enjoy no problem. Therefore, you can choose travel package based
                                        on your interested and you will excited. Thus, available tour package
                                        from another countries, like Japan, American, European and etc
                                    </p>
                            </div>
                        </div>
                     </div>
                </section>

                <section  className="our-services-section" id="our-services">
                       <h1 className="title-section">#Our Service</h1>
                         <div className="container">
                          <div className="row my-5">
                            <div className="card col-xl-3 col-md-9 mx-auto px-4 shadow-sm p-3 mb-3 bg-body rounded">
                               <div className="px-2 py-3">
                                <h3 className="">Lodging and rental of hotel premises</h3>
                                <ul className="px-3 py-3">
                                    <li>Eksklusif Hotel</li>
                                    <li>Quality Price</li>
                                    <li>Have Support Facilities</li>
                                    <li>Service 24 Non-stop</li>
                                </ul>
                               </div>
                            </div>

                            <div className="card col-xl-3 col-md-9 mx-auto px-4 shadow-sm p-3 mb-3 bg-body rounded">
                               <div className="px-2 py-3">
                                <h3 className="">Various Kinds of Tourist Attractions</h3>
                                <ul className="px-3 py-3">
                                    <li>Eksklusif Tourist</li>
                                    <li>Many Price Package</li>
                                    <li>Have Support Facilities</li>
                                    <li>Free Transportation</li>
                                </ul>
                               </div>
                            </div>

                            <div className="card col-xl-3 col-md-9 mx-auto px-4 shadow-sm p-3 mb-3 bg-body rounded">
                                <div className="px-2 py-3">
                                <h3>Travel Package Eksklusif</h3>
                                <ul className="px-3 py-3">
                                    <li>Eksklusif Package</li>
                                    <li>Quality Price</li>
                                    <li>Good and Fast Service</li>
                                    <li>Can be Refund </li>
                                </ul>
                               </div>
                            </div>
                         </div>
                         </div>
                 </section>

                 <section className="lets-booking-section" id="lets-book-services">
                        <h1 className="title-section">#Let's Booking</h1>
                         <div className="container">
                          <div className="row">
                            <div className="col-xl-6 col-md-12 text-center mx-auto my-auto">
                               <img src={web} alt="lets-go.png"/>
                            </div>
                            <div className="col-xl-6 col-md-12 text-center mx-auto my-auto">
                               <p className="text-center">To can booking travel package, you must visit on Travel-Tour Website,Happy Booking and Holiday</p>
                               <Button className="Button" variant="contained"><Link className="text-white text-reset" to="dashboard">Visit Travel-Tour</Link></Button>
                            </div>
                          </div>
                          </div>
                 </section>
            </main>
        </div>
    )
}