import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import {post} from 'react-axios';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export default function Login(){ 
  const [error, setError] = useState(false);
  const [false1,setFalse1]=useState(null);
  const {register,handleSubmit,formState: {errors}}=useForm(); 
    const navigate = useNavigate();

         const onSubmit =async (data) => {
          try {setError(true);
            const response= await axios.post(` https://ecommerce-node4.onrender.com/auth/signin`,data);
            setFalse1(null);
            console.log("ss"+response)
           if (response.status===200) {
          localStorage.setItem("userToken",response.data.token);
               
            navigate('/')
             
           }
 }
           
          catch (error) {
            setError(true);
            setFalse1(error.response.data.message);
            console.error("حدث خطأ أثناء التسجيل:", error.response ? error.response.data :error.message);
           }
          finally{
            setError(false);
          }
    
    };
    return(
    <>
       <div className="d-flex container">
   <div className="">
    <img className="w-75  " src={ ("/imag/dl.beatsnoop 1.png")} alt="" />
   </div>


      <Form className="h-75" onSubmit={handleSubmit(onSubmit)}>
       <h2>Log in to Exclusive</h2>
       <p>Enter your details below</p>
      {<div className="text-danger">{false1}</div> } 


       <FloatingLabel
        controlId="floatingInput2"
        label="Email address"
        className="mb-3"
       
      >
        <Form.Control type="email"  {...register("email",{required:"email is required"})} placeholder=" " />
       {errors.email?<div className="text-danger">{errors.email.message}</div>:null}

      </FloatingLabel>
     
 
       <FloatingLabel
        controlId="floatingInput3"
        label="password"
        className="mb-3"
      
      >
        <Form.Control type="password"  {...register("password",{required:"password is required"})} placeholder="" />
        {errors.password?<div className="text-danger">{errors.password.message}</div>:null}
        <Link as={Link} to="/SendCode">forget your password</Link>
      </FloatingLabel>
      
       <Button variant="primary" type="submit">{error?<p>loading...</p>:<p>Login</p>}
        </Button>   
      </Form>
      </div>

     </>
    );
}