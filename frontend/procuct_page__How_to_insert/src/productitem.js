import React from 'react'
import "./productitem.css"
import image from './productimage/image216.png'
import image2 from './productimage/image177.png'
import image3 from './productimage/image214.png'
import image4 from './productimage/image215.png'

export default function Productitem(props) {
  return (
    <>
    <div className="product">
    <div className='Productimg'>
    <ul >
    <li >
     <div style={{backgroundColor:'#FFEAE3'}}></div>
    </li>
    <li >
    <div style={{backgroundColor:'#FDC295'}}></div>
    </li>
    <li>
    <div style={{backgroundColor:'#E6AE91'}}></div>  
    </li>
    <li>
    <div style={{backgroundColor:'#D89877'}}></div>
    </li>
    <li>
    <div style={{backgroundColor:'#BD7A5D'}}></div>  
    </li>
    <li>
    <div style={{backgroundColor:'#7D5C4D'}}></div>  
    </li>
  </ul>
    </div>
    <div className="maybelineimg"><span className="maybelineimg"><img src={image} alt="image not loading" className='imageperfume' ></img> </span></div>
    <div className='bottomimages'>
      <span className='bottomimage'><img className='bottomimage' src={image2}></img></span>
      <span  ><img className='bottomimage' src={image3}></img></span>
      <span><img className='bottomimage' src={image4}></img></span>
      
    </div>
    </div>
    
    
    </>
  )
}
