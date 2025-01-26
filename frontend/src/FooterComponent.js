import React from "react";
function FooterComponent()
{
  return(
  <footer>
    <div class="footer-container">
      {/* <!-- About Section --> */}
      <div class="footer-section">
        <h3>About Us</h3>
        <p>AB Attar & Perfumes is your one-stop shop for premium fragrances and attars. Discover the essence of elegance with our high-quality products.</p>
      </div>
      
      {/* <!-- Quick Links --> */}
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      
      {/* <!-- Contact Section --> */}
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: ahmadbasha061@gmail.com</p>
        <p>Phone: +91 9177246890</p>
        <p>Address: Gudivada, India</p>
      </div>
    </div>
    
    {/* <!-- Social Media Links --> */}
    <div class="social-media">
      <a href="https://facebook.com">Facebook</a>
      <a href="https://instagram.com">Instagram</a>
      <a href="https://twitter.com" >Twitter</a>
    </div>
    
    {/* <!-- Copyright Section --> */}
    <div class="copyright">
      <p>© 2025 Rakesh Kumar. All Rights Reserved.</p>
    </div>
  </footer>
  
  );
}
export default FooterComponent;