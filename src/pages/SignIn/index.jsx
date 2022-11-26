const formData = [
    {
        name:"username",
        type:"text",
        id :"username"
    }, 
    {
        name:"email",
        type:"email",
        id :"email"
    },
    {
        name:"password",
        type:"password",
        id :"password"
    },
    {
        name:"confirm-password",
        type:"password",
        id :"confirm-password"
    }
]

export const SignIn = () => {
   return (
    <div className="modal fade text-center" id="ModalSignIn" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">SignIn</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form method="post">
                        {formData.map((item, index)=>
                            <div className="mb-3" key={index}>
                                <label htmlFor={item.name} name={item.name} className="col-form-label float-start text-muted fss-45">{item.name}</label>
                                <input type={item.type} className="form-control" id={item.id} />
                            </div>
                        )}
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Sign in</button>
                </div>
            </div>
        </div>
     </div>
   )
}