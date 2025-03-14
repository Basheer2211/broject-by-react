import react from "react";
import  './footer.css'; 
export default function Footer(){

    return(
        <>
        <footer className="footer">
      <div className="container1">
        <div className="footer-section">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <p>11 Sylly Warok, Dhaka, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+0885-88888-5555</p>
        </div>

        <div className="footer-section">
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="footer-section">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="qr-code">
            <img src="qr-code.png" alt="QR Code" />
            <div className="app-links">
              <img src="google-play.png" alt="Google Play" />
              <img src="app-store.png" alt="App Store" />
            </div>
          </div>
        </div>
      </div>

      <p className="copyright">© Copyright Rimex 2022. All rights reserved</p>
    </footer>
        </>
    )
}