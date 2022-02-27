import React from 'react'

const Header = () => {
    return (
        <nav style={{display:"flex",justifyContent:"space-between",backgroundColor:"aliceblue"}}>
            <h5 className='m-1 mx-5' style={{color:"rgb(63, 127, 245)" }}>Notebook</h5>
            <button type="button" className="btn btn-danger btn-sm m-1 mx-4">LogOff</button>
        </nav>
    )
}

export default Header