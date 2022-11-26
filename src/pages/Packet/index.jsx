import {Link } from "react-router-dom"
import "../../index.css"

export const Packet = ({packet}) => {  
    return(
        <div className=" col-sm-6 col-md-3 borders" key={packet.id}>
               <Link className="a-remove-decoration" to={`/dashboard/${packet.id}`}>
                    <img src={packet.urlImage} className="card-img-top w-150 rounded-4" alt=""/>
                          <div className="card-body text-start">  
                               <p hidden>Id: : {packet.id}</p>
                               <h6 className="my-1"><b>{packet.name}</b></h6>
                               <p className="m-0 text-muted fs-6">{packet.location}, {packet.country}</p>
                               <p className="m-0 mb-5 fs-6"><b>{packet.price}</b>/night</p>
                         </div>
               </Link>
        </div>
   ) 
}