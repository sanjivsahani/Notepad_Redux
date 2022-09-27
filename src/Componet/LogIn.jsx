import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
const Login = () => {
    let navigate = useNavigate();
    const initData = {
        email: "",
        password: "",
    }

    const [loginData, setloginData] = useState(initData)

    const handleChange = (e) => {
        setloginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const navigate_signup = () => {
        navigate('/signup')
    }
    const login_func = () => {
        // api callignt for the login 
        axios.post('http://localhost:5000/api/auth/login', loginData).then((res) => {
            let response = res.data
            if(response.success == true){
                localStorage.setItem('token',response.authtoken)
                navigate('/data/home')
            }
        })

    }
    return (
        <div className='login'>

            <div className="logo_container">
                <h1 className='logo'>Notebook</h1>
                <h4 className='logo_Subline'>Store Your notes on the cloud get your  </h4>
                <h4 className='logo_Subline'>get your notes from any where</h4>

            </div>

            <div className="login_info d-grid gap-2 ">

                <input type="email" name="email" placeholder='Enter your Email' onChange={handleChange} />

                <input type="password" name="password" placeholder='Enter your Password' onChange={handleChange} />

                <div className="d-grid gap-2">
                    <button className="btn btn-primary btn-sm" type="button" onClick={login_func} >Login</button>
                    <button className="btn btn-success btn-sm" type="button " onClick={navigate_signup}>Create a new account</button>
                </div>

            </div>

        </div>

    )
}
export default Login;