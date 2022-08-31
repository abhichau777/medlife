import React from 'react'
import "./productdescription.css"
import Star from "./productimage/Vector.png"
import Discount from "./productimage/30%off.png"
export default function Productdescription(props) {
  return (
    <div className='Productdescription'>
     <div >
     <h3 >{props.headline}</h3>
     </div>
     <div>
     <span><img src={Star}></img> </span><span>4.5 (8627)</span> <span><img  src={Discount}></img></span>
     </div>
     <div >
        <span className="MRP">M.R.P.:</span><span className='price' ><s> 415</s></span>
     </div>
    <div >
        <span>
            DEAL OF THE DAY :
        </span>
        <span >
            Rs. 415
        </span>
    </div>
    <div >
        <span>
           YOU SAVE :
        </span>
        <span >
            Rs. 184
        </span>
    </div>
    <div style={{marginBottom: "25px",marginTop: "25px"}} >
        <p>Save extra with special offers</p>
    </div>
    
    <div >
        <p>
        Bank Offer: 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000 

        </p>
        </div>
    <div >
        <p>
        Partner Offers: Get GST invoice and save up to 28% on business purchases. Sign up for free 
        </p>
        </div>
        <div >
        <h3>Item Details</h3>
        <p>
        <p><b className='descriptionbold'>Colour: </b>Buff Beige</p>
        <p><b className='descriptionbold' >Brand:	</b>	Maybelline</p>
        <p><b className='descriptionbold' >Coverage:</b>	Full</p>
        <p><b className='descriptionbold' >Skin Tone:</b>	Light</p>
        <p><b className='descriptionbold' >Special Feature:</b>	Travel Size</p>
        <p><b className='descriptionbold'  >Finish Type:</b>	Matte</p>
        <p><b className='descriptionbold' >Item Weight:	</b>104 Grams</p>
        <p><b className='descriptionbold' >Item Dimensions: </b>LxWxH	30 x 30 x 107 Millimeters</p>
        <p><b className='descriptionbold' >Product Benefits:	</b>Lightweight Pore minimizing foundation. Natural Matte Finish</p>
        <p><b className='descriptionbold' >Country/Region Of Origin:</b>	China</p>
        <p></p>












        </p>

        </div>
    </div>
    
  )
}
