import Navbar1  from "../../../../component/user/navbar/navbar";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import Footer from "../../../../component/footer/Footer";
import { Link } from 'react-router-dom';

import './categories.css'
export default function Categories(){
const [loading,setLoad]=useState(true);
const [categories, setCategories] = useState([]);

 const getCategory=async()=> {
    try{ setLoad(true)
           const response=await axios.get(`https://ecommerce-node4.onrender.com/categories/active`);
           setCategories(response.data.categories);
           console.log(response.data.categories)
     }catch(err){ setLoad(true)
        console.log(err)
    }
    finally{
        setLoad(false)
    }
 
    
}
useEffect(() => {
    getCategory();
  }, []);

  if (loading==true) {
    return (
    <div className="d-flex justify-content-center align-items-center vh-100">

        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>

      );
    
  }



    return( 
    <>
 <Navbar1/>

 <div className="">
 <div><h2 className="text-center">Categories</h2></div>
 
<div className="container  ">
    <div className="row justify-content-center">
{categories.map((data)=>( 
<div key={data._id} className="col-md-6 col-lg-4 text-center m-3 img-fluid rounded shadow">
    <div className="image-container">
    <img src={data.image.secure_url} alt="" className="img-fluid rounded shadow img-hover-zoom"/>
       
    </div>
</div>
 
     
))}
</div>
</div>
</div>
 <Footer/>
    </>)
}