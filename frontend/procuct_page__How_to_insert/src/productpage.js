import React,{useEffect,useState} from 'react'
import Productitem from './productitem'
import "./productpage.css"
import Productdescription from './productdescription'
import Productprice from './productprice'
import axios from 'axios'


// 1 . product Image
// 2 . product remaining imgaes
// 3 . tile of Image 
// 4 . MRP  , deal of the day , you save 
// 5 . save extra with special offers
// 6 . item details
// 7 . in stock or out of stock
// 8 . final price 
// 9 . date of delivery 
// 10 . delivery location
// 11  . add to cart
// 12 . buy now
export default function Productpage() {

  
  const [product,setProduct] = useState([]);
  
  
const loadproduct = async () =>{
  const result = await axios.get("http://localhost/medilife/product.php");
  console.log(result.data);
  console.log(result.data.product_name);
  
  var prodcutimg = result.data.product_img;
  var prodcutdesc = result.data.product_desc;
  var prodcutprice = result.data.product_price;
  setProduct(result.data)

  

}
loadproduct();


  return (
    <div className='Productpage'>
      <Productitem prodcutimg="prodcutimg"  />
      <Productdescription headline = {product.product_name} />
      <Productprice prodcutprice={product.product_price} />
      
    </div>
  )
}
