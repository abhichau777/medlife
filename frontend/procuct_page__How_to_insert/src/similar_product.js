import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';

export default function Similar_product1() {
    const [text,setText] = useState();
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const senddata={
            similar:text.product
        }
        axios.post('http://localhost/php/registration/product.php',senddata)
        .then((result)=>{
            if(result.data.status==='200'){
                console.log(result)
            }
            else{
                console.log("not fetch data")
            }
        })
    }
  return (
    <div>
    <form onSubmit={submitForm}>
    <div className="main-box">
    <div className="row">
         <div className="col-md-12 text-center"> <h1>Products</h1></div>
    </div>
    <div className="row">
       <div className="col-md-6">type product : </div>
       <div className="col-md-6"><input type="text" name="product"  
       onChange={handleChange} value={text} /></div>
    </div>
    <div className="row">
       <div className="col-md-12 text-center">
           <input type="submit" name="submit"  className="btn btn-success" value="submit" />
       </div>
       
    </div>
    </div>
    </form>
    </div>
  )
}
