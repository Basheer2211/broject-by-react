import React from "react";
import Navbar1 from "../../component/user/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { Outlet } from "react-router-dom";
export default function Authlayout(){

    return(
        <>
    <Navbar1/>
    <Outlet />
    <Footer/>
         </>
    );
}