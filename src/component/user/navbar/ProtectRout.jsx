import React from "react";
import { Alert } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
export default function PrtectRout({children}){
 const navigat=useNavigate();
    console.log("mmm")
    const userToken=localStorage.getItem("userToken");
    console.log(userToken )
    if (userToken) {
        return children;
    }
    else{
        return <Navigate to='/Login'></Navigate>    }
}