import React from "react";
import Navbar1 from "../../../../component/user/navbar/Navbar";
import  { useEffect, useState } from "react";
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../../component/footer/Footer";
import "./pto.css"
export default function ProDetails(){
const {productid}=useParams();
const navigate=useNavigate();

 const [loading,setLoad]=useState(true);
 const [categories, setCategories] = useState([]);
 const getCategory=async()=> {
    try{ setLoad(true)
           const response=await axios.get(`https://ecommerce-node4.onrender.com/products/${productid}`);
         console.log(response.data.product)
           setCategories(  [response.data.product]);
          
            
     }catch(err){ setLoad(true)
        console.log(err)
    }
    finally{
        setLoad(false)
    }
    console.log("ccc:"+categories)
 
    
}
useEffect(() => {
    getCategory();
  }, []);

  const addProductToCart = async () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
        console.log("User is not logged in!");
        return;
    }

    try {
        const response = await axios.post(
            'https://ecommerce-node4.onrender.com/cart',
            { productId: productid },
            { headers: { Authorization: `Tariq__${token}` } }
        );
        console.log("Product added to cart:", response.data);

if (response.status=201) {
  navigate('/Cart')
  
}

    } catch (err) {
        console.log("Error adding product to cart:", err);
    }
};

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

<div className="container">
        {categories.map((data)=>( 
<div key={data._id} className="col-md-6 col-lg-4 text-center m-3 img-fluid rounded shadow image-container1">
    <div className="image-container   shadow">
        
   
    <img src={data.subImages?.[0].secure_url} alt="" className="img-fluid rounded shadow  img-hover-zoom"/>
     
    <p className=" mt-4">{data.name}</p>
    <p className="">discount: {data.discount}</p>
    <p className="">price: <span className="line-through ">{data.price}</span></p>
    <p className=""> Finalprice: {data.finalPrice}</p>
     <button onClick={addProductToCart }>add to cart</button>
    </div>
</div>
 
))} 
</div>  
</div>  
 <Footer/>
 
         </>
    )
} 