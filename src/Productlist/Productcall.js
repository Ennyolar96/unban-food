import React from 'react'
import './product.css'

function Productcall(props) {
  return (
    <div>
        <div className='productcontainer'>
            <img src = {props.images} alt='Cool'/>
            <p>{props.name}</p>

                <div className='btnp'>
                    <p>{props.prices}</p>
                    <button>Buy Now</button>
                </div>
        </div>
    </div>
  )
}

export default Productcall