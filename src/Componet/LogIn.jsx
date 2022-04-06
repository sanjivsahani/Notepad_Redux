import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();

    const navigate_signup = () => {
        navigate('/signup')
    }
    const login_func = () => {
        navigate('/data/home')
    }
    return (
        <div className='login'>

            <div className="logo_container">
                <h1 className='logo'>Notebook</h1>
                <h4 className='logo_Subline'>Store Your notes on the cloud get your  </h4>
                <h4 className='logo_Subline'>get your notes from any where</h4>

            </div>

            <div className="login_info d-grid gap-2 ">
               
                <input type="email" name=""  placeholder='Enter your Email'/>
              
                <input type="password"  placeholder='Enter your Password'/>

                <div className="d-grid gap-2">
                    <button className="btn btn-primary btn-sm" type="button" onClick = {login_func} >Login</button>
                    <button className="btn btn-success btn-sm" type="button " onClick={navigate_signup}>Create a new account</button>
                </div>

            </div>

        </div>

    )
}
export default Login;