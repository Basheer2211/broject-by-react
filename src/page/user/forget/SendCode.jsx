import React from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SendCode(){
    const[err,setErr]=useState(false);
    const{register,handleSubmit,formState: {errors}}=useForm();
    const[email,setEmail]=useState("");
    const navigat=useNavigate();
    const sendcode =async(data)=>{
         
        try{
            setErr(true);
            const response=await axios.patch(`https://ecommerce-node4.onrender.com/auth/sendcode`,{
                email:data.email
            });
            console.log(response)
            if (response.status==200) {
                alert(response.data.message);
                navigat('/Forget')
            }
            else{
                alert(response.data.message);
            }
        }catch(err){
            setErr(true);
            console.log("err");

        }
        finally{
            setErr(false);
        }
    }



    return(
        <>
            <div className="d-flex container">
               <div className="">
                  <img className="w-75  " src={ ("/imag/dl.beatsnoop 1.png")} alt="" />
               </div>
               <Form  className="h-75" onSubmit={handleSubmit(sendcode)}>
                <h2>to send the code enter your email</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail"/>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                            type="email"
                            placeholder="Enter email"
                            {...register("email", { required: "Email is required" })}  
                        />
                            <button type="submit"> {err?"laode...":"submit"}</button>
               </Form>
             
            </div>
           
        </>
    )
}