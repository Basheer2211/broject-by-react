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
export default function Regester(){
  const [error, setError] = useState(false);
  const [false1,setFalse1]=useState(null);
  const {register,handleSubmit,formState: {errors}}=useForm(); 
    const navigate = useNavigate();

         const onSubmit =async (data) => {
          try {setError(true);
            const response= await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,data);
            setFalse1(null);
           if (response.status===201) {
            toast.info('welcome', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
               
            navigate('/Login')
           }
           if (response.status===409) {
           

            setError()
            
           }
           
          } catch (error) {
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
   <div>
    <img className="w-75  " src={ ("/imag/dl.beatsnoop 1.png")} alt="" />
   </div>

      <Form className="w-25" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
      {<div className="text-danger">{false1}</div> } 
      <FloatingLabel
        controlId="floatingInput1"
        label="User name"
        className="mb-3"
       
      >
        <Form.Control type="text"  {...register("userName",{required:"user name is required"})} placeholder=" " />
       {errors.userName?<div className="text-danger">{errors.userName.message}</div> :null}
      </FloatingLabel>
       

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
       <Button variant="primary" type="submit">{error?<p>loading...</p>:<p>Register</p>}
        </Button>   
      </Form>
      </div>
     </>
    );
}