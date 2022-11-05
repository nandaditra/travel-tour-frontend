export const Login = () => {
    return (
        <div className="modal fade" id="ModalLogin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="username-email" className="col-form-label float-start text-muted fss-45">Username or Email</label>
                        <input type="text" className="form-control" name="username-email" id="username-email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="col-form-label float-start text-muted fss-45">Password</label>
                        <input type="password" className="form-control" name="log-password" id="log-password" />
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
            </div>
        </div>
    )   
}