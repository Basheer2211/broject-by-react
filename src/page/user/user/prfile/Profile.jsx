import { Outlet } from "react-router-dom";
import Navbar1  from "../../../../component/user/navbar/navbar";
 import { Container ,Row ,Col } from "react-bootstrap";
 import Footer from "../../../../component/footer/Footer";
 import './pro.css'
 import Sidebar1 from "../sidebar/Sidebar";

export default function Profile(){

    return(
        <>
        <Navbar1/>

        <Container  fluid className="bg1">
         <Row>
            <Col md={3.0}  className="col1 ">  <Sidebar1/></Col>

            <Col md={9}  className="col2 "> <Outlet/> </Col>
         </Row>

        </Container>
       <Footer/>
      
      
        </>
    )
}