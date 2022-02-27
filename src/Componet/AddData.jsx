import React from 'react'
import './Data.css'

const AddData = () => {
    return (
        <div className='add_data'>
            <h4>Notes On the Cloud</h4>
            <input type="text" style={{ width: "90%", margin: "5px" }} placeholder="Title" />
            <input type="text" style={{ width: "90%", margin: "5px",height:"80px" }} placeholder="Description" />
            <input type="text" style={{ width: "90%", margin: "5px" }} placeholder="Tag" />
           <button style={{ width: "90%", margin: "8px" }} className="btn btn-primary btn-sm"> Add your Notes</button>


        </div>
    )
}

export default AddData