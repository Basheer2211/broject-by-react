import { useContext, useEffect } from "react";
import { UserContext } from "../context/Usercontext";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Navbar1() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
 
    const logout = () => {
       
        localStorage.removeItem("userToken");
        localStorage.removeItem("userData");
        setUser(null);
        navigate("/Login");
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">B-shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!user ? (
                            <>
                                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/Product">Product</Nav.Link>
                                <Nav.Link as={Link} to="/Categories">Categories</Nav.Link>
                                <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>

                                <DropdownButton id="dropdown-basic-button" title={user?.userName || "User"}>
                                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                </DropdownButton>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
