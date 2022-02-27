import './Signup.css'
const Signup = () => {

    return (
        <div className='singup d-flex  ' >

            <div className="logo_container mx-3">
                <h1 className='logo'>Notebook</h1>
                <h4 className='logo_Subline'>Store Your notes on the cloud get your  </h4>
                <h4 className='logo_Subline'>get your notes from any where</h4>

            </div>

            <div className="login_info d-grid gap-2  mx-4 ">
            <input type="text" name=""  placeholder='Enter your Name'/>
               
                <input type="email" name=""  placeholder='Enter your Email'/>
              
                <input type="password"  placeholder='Enter your Password'/>

                <div class="d-grid gap-2 my-2">
                    <button class="btn btn-success btn-sm" type="button">Create a new account</button>
                    <button class="btn btn-primary btn-sm" type="button">Login</button>
                </div>

            </div>

        </div>

    )
}
export default Signup;