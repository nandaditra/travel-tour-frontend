import { useParams } from "react-router-dom"
import Header from "../components/HeaderPage"
import Footer from "../components/FooterPage"
import { datas } from "./apidatas"
import "../index.css"


export default function OverviewData() {
    const { packetId } = useParams(); 
    const packet = datas.find((packet)=> packet.id === packetId);
    const { name, location, country, urlImage, description, commentatory, price } = packet

    var countPrice = parseInt(price)*2
    var totalPrice = countPrice+  50 + 35

    return(
        <>
          <Header />

          <main className="bg-white p-1 text-start">
                 <div className="row my-2">
                        <div className="col-sm-12 col-md-8">
                            <h2 className="fw-bold">{name}</h2>
                            <a className="text-muted" href="/" alt="">{location},{country}</a>
                            <img 
                               className="w-100 rounded-4 my-3"
                               src={urlImage} 
                               alt=""
                               />
                            <hr />
                            <ul className="list-unstyled">
                              <li className="fs-5 fw-bold"><i className="fa-solid fa-plane-departure fa-1x"></i> Great for Holiday</li>
                              <li className="fs-5 fw-bold"><i className="fa-solid fa-cross fa-1x"></i>  History and Religi</li>
                              <li className="fs-5 fw-bold"><i className="fa-solid fa-check fa-1x"></i>  Self check-in</li>
                            </ul>
                            <hr />
                            <p className="text-justify">{description}</p>
                        
                            <hr />
                            <h4 className="fw-bold">Reviews</h4>
                                <div className="row m-0 my-3">
                                  {commentatory.map((item, index)=> 
                                     <div key={index} className="col-sm-12 col-md-6">
                                       <div className="float-start m-1">
                                           <img 
                                              className="img-review rounded-circle rounded-5"
                                              src={item["urlImg"]} 
                                              alt=""
                                              />
                                       </div>
                                       <div className="mx-5 my-2">
                                           <span className="fw-bold">{item.name}</span>
                                           <p className="text-muted fss-45">{item.date}</p>
                                       </div>

                                        <p className="fss-4">"{item.comment}</p>
                            
                                    </div>
                                   )}
                                </div>
                            <hr />
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">{price} / person</h5>
                                <div className="row mx-0 my-4">
                                    <div className="col-6 border rounded-start">
                                        <p className="m-0 fss-3 text-muted">Check-in</p>
                                        <p className="m-0 fss-4">12/02/2023</p>
                                    </div>
                                    <div className="col-6 border rounded-end">
                                        <p className="m-0 fss-3 text-muted">Guest</p>
                                        <p className="m-0 fss-4">3</p>
                                    </div>
                                </div>
                                <button className="btn btn-danger w-100 my-2">Reserve</button>
                                  <p className="text-center fss-3">You won't be charged yet</p>
                                  <div className="col-12 mb-3">
                                      {price} x 2 hour <span className="text-end float-end"> ${countPrice.toString()}</span>
                                  </div>
                                  <div className="col-12 mb-3">
                                      Guide Fee  <span className="text-end float-end">$50</span>
                                  </div>
                                  <div className="col-12 mb-3">
                                      Taxes   <span className="text-end float-end">$35</span>
                                  </div>

                                  <hr />
                                  <div className="col-12">
                                      Total  <span className="text-end float-end">${totalPrice.toString()}</span>
                                  </div>
                              </div>
                            </div>
                        </div>
               </div>
          </main>
      
          <Footer />
        </>
    )
}
