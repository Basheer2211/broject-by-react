import React, { useEffect } from "react";
import SwipCat from "../../component/swipCat/SwipCat";
import Navbar1 from "../../component/user/navbar/Navbar";
import Footer from "../../component/footer/Footer";

export default function Home(){
    useEffect(() => {
        if (!localStorage.getItem("reloaded")) {
           localStorage.setItem("reloaded", "true");
           window.location.reload();
        }
     }, []);
    return(
        <>
        <Navbar1/>
        <img src="https://ar.pngtree.com/freebackground/caucasian-man-approves-online-store-on-mobile-screen-photo_12490100.html" alt="" />
        
       <SwipCat/>
       <Footer/>

        </>
    );
}