import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

const Signup = () => {
    const InitData = {
        name: "",
        email: "",
        password: ""
    }
    const [state, setState] = useState(InitData)

    let navigate = useNavigate();

    const navigate_login = () => {
        navigate('/')
    }

    // function for signup
    const signup_func = () => {
        // api calling for the Sighup 
        axios.post("http://localhost:5000/api/auth/singup",state).then((res)=>{
            let response = res.data
            // console.log(response.authtoken)
            if(response.success == true){
                localStorage.setItem("token",response.authtoken)
                navigate('/data/home')
            }
        })
        console.log(state)
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <div className='singup d-flex  ' >

            <div className="logo_container mx-3">
                <h1 className='logo'>Notebook</h1>
                <h4 className='logo_Subline'>Store Your notes on the cloud get your  </h4>
                <h4 className='logo_Subline'>get your notes from any where</h4>

            </div>

            <div className="login_info d-grid gap-2  mx-4 ">
                <input type="text" name="name" placeholder='Enter your Name' onChange={handleChange} />

                <input type="email" name="email" placeholder='Enter your Email' onChange={handleChange} />

                <input type="password" name='password' placeholder='Enter your Password' onChange={handleChange} />

                <div class="d-grid gap-2 my-2">
                    <button class="btn btn-success btn-sm" type="button" onClick={signup_func}>Sign Up now</button>
                    <button class="btn btn-primary btn-sm" type="button" onClick={navigate_login}> Login page</button>
                </div>

            </div>

        </div>

    )
}
export default Signup;