import React from 'react'
import AddData from './AddData'
import Header from './Header'
import ShowData from './ShowData'

const Data = () => {
  return (
    <div>
        <Header/>
    <div className="container-fluid data">
  <div className="row">
    <div className="col-6 my-4">
      <AddData/>
    </div>
    <div className="col-6 ">
      <ShowData/>
    </div>
     
  </div>
</div>
    </div>
  )
}

export default Data