import { useState } from "react" 
import "./productprice.css"
import location from "./productimage/location1.png"
export default function Productprice(props) {
  var [item,setItem] = useState(0);
  const handleclick = ()=>{
      item =item +1;
      setItem(item);
  }
  return (
    <div className="productprice">
      
    <div >
    <span className='ruppes'>Rs</span>
    <span className='checkoutprice' >{props.prodcutprice}</span>

    </div>
    <div>
    Date of delievery: Within 3 days
    </div>
    <div>
    <span>Select delivery location      </span>
    <span><img src={location} width="20px" height="20px"></img></span>
    
    </div>
    <div>
    <p>In Stock</p>
    </div>
    <div>
      <span>Quantity : </span>
      <span><input value={item}></input><button onClick={handleclick} >^</button></span>
    </div>
    <div>
      <button>Add to cart</button>
      <button>Buy Now</button>
    </div>
    
    </div>
  )
}
