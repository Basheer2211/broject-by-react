import React, { useEffect, useState } from "react";
import Navbar1 from  '../../../../component/user/navbar/Navbar'
import axios from 'axios'
import Footer from "../../../../component/footer/Footer";
import  './product.css'
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

export default function Product() {
  const [loading, setLoad] = useState(true);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const [totalPages, setTotalPages] = useState(1);    // Track total number of pages

  const getCategory = async () => {
    try {
      setLoad(true);
      const response = await axios.get(`https://ecommerce-node4.onrender.com/products?page=${currentPage}&limit=4`);
      setCategories(response.data.products);
      setTotalPages(response.data.totalPages); // Assuming the API returns totalPages in response
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, [currentPage]); // Re-fetch products when currentPage changes

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Navbar1 />
      <div className="border shadow">
        <div><h2 className="text-center">Product</h2></div>
        <div className="container">
          <div className="row justify-content-center">
            {categories.map((data) => (
              <div key={data._id} className="col-md-6 col-lg-4 text-center m-3 img-fluid rounded shadow image-container1">
                <img src={data.subImages?.[0].secure_url} alt="" className="img-fluid rounded shadow"/>
                <p className=" ">{data.name}</p>
                <p className="">Discount: {data.discount}</p>
                <p className=" ">Price: <span className="line-through">{data.price}</span></p>
                <p className="">Final Price: {data.finalPrice}</p>
                <Link to={`/productdetails/${data._id}`} className="overlay">Details</Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="d-flex justify-content-center">
            <button 
              className="btn btn-primary m-2" 
              onClick={() => setCurrentPage(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="m-2">Page {currentPage} of {totalPages}</span>
            <button 
              className="btn btn-primary m-2" 
              onClick={() => setCurrentPage(currentPage + 1)} 
              disabled={currentPage ===3 }
             >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
