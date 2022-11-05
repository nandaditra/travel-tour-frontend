import "../index.css"

export default function PersonalData() {
    return (
        <div className="personal-data-bg">
           <div className="container-fluid my-5">
                 <form method="post"> 
                    <div className="row m-0 text-start text-muted">
                         <div className="col-6">
                             <label htmlFor="firstName" className="form-label">firstname:</label>
                             <input type="firstName" className="form-control" name="firstname" />
                         </div>
                         <div className="col-6">
                                <label htmlFor="firstName" className="form-label">lastname:</label>
                                <input type="firstName" className="form-control" name="lastname" />
                         </div>
                         <div>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email"/>

                                <label htmlFor="cellphone" className="form-label">No Handphone</label>
                                <input type="cellphone" className="form-control" name="cellphone"/>

                                <label htmlFor="country" className="form-label">Country</label>
                                <input type="country" className="form-control" name="country"/>

                                <label htmlFor="facebook" className="form-label">URL Facebook</label>
                                <input type="facebook" className="form-control" name="url-facebook"/>
                         </div>

                         <div className="form-check">
                            <p className="form-check-label" htmlFor="flexRadioDefault1">Gender</p>
                            <input className="form-check-input" type="radio" name="male" id="male" />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="female" id="female" />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                         
                    </div>

                  


                    <button className="btn btn-success"type="submit">Save</button>
                 </form>
            </div>            
        </div>
    )
}