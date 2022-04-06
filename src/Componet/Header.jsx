import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    const navigate_login = () => {
        navigate('/')
    }
    return (
        <nav style={{display:"flex",justifyContent:"space-between",backgroundColor:"aliceblue"}}>
            <h5 className='m-1 mx-5' style={{color:"rgb(63, 127, 245)" }}>Notebook</h5>
            <button type="button" className="btn btn-danger btn-sm m-1 mx-4" onClick={navigate_login}>LogOff</button>
        </nav>
    )
}

export default Header