import React from 'react'
import { useState } from 'react'
import FooterPage from '../components/FooterPage'
import '../index.css'

export default function OrderPacket() {
    const [name, setName] = useState() 
    const [date, setDate] = useState()
    const [person, setPerson] = useState()
    const [country, setCountry] = useState()
    const [province, setProvince] = useState()
    const [Regions, seRegions] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [address, setAddress] = useState()

    return (
            <div className="bg-white p-5">
               <div className="row m-5 text-start">
                   <div className="col-6">
                      <form action="/" method="post">
                         <div className="mb-3 col-12">
                             <label className="form-label">Your Name</label>
                             <input name="name" className="form-control" placeholder='Your Name' />
                         </div>
                         <div className="mb-3 col-12">
                             <label className="form-label">Date</label>
                             <input name="date" className="form-control" placeholder='20 September' />
                         </div>
                         <div className="mb-3 col-12">
                             <label className="form-label">Person</label>
                             <input name="person" className="form-control" placeholder='0'/>
                         </div>      
                         <div className="mb-3 col-5">
                              <label className="form-label">Country</label>
                              <input name="country" className="form-control" placeholder='Ex: Malaysia'/>
                         </div>
                         <div className="mb-3 col-5">
                              <label className="form-label">Province</label>
                               <input name="province" className="form-control" placeholder='Jakarta'/>
                         </div>
                         <div>
                              
                         </div>
                      </form>
                   </div>
                   <div className="col-6">

                   </div>
               </div>
            
               <FooterPage />
            </div>
    )
}