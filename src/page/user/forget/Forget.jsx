import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
 
import {post} from 'react-axios';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export default function Forget(){ 
  const [error, setError] = useState(false);
  const [false1,setFalse1]=useState(null);
  const {register,handleSubmit,formState: {errors}}=useForm(); 
    const navigate = useNavigate();

         const onSubmit =async (data) => {
             console.log(data);
          try {
            setError(true);
            const response= await axios.patch(` https://ecommerce-node4.onrender.com/auth/sendcode`,data);
            setFalse1(null);
           
           if (response.status===200) {
            toast.success("✅ Password changed successfully!", { position: "top-center" });
            navigate('/');
           }
           else{
            toast.error("❌ Failed to change password. Please check your details.", { position: "top-center" });

           }
 }
           
          catch (error) {
            setError(true);
 
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
       <h2>Change your password</h2>
       <p>Enter your email and new password</p>
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

      </FloatingLabel>
    
      <FloatingLabel
        controlId="floatingInput2"
        label="code"
        className="mb-3"
       
      >
        <Form.Control type="text"  {...register("code",{required:"code is required"})} placeholder=" " />
       {errors.code?<div className="text-danger">{errors.code.message}</div>:null}

      </FloatingLabel>


       <Button variant="primary" type="submit">{error?<p>loading...</p>:<p>submit</p>}
        </Button>   
      </Form>
      </div>

     </>
    );
}