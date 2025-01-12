import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {

    return (
      <div className="text-center my-4">
        <img src={loading} alt="loading..." style={{ width: '110px', height: '90px'}} />  
      </div>
    )
}
export default Spinner 
