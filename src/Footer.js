import React from 'react'

export default function Footer() {
    return (
        
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li><a href="#">Mystery</a></li>
                  <li><a href="#">Fiction</a></li>
                  <li><a href="#">Graphic Novels</a></li>
                  <li><a href="#">Fantasy</a></li>
                  <li><a href="#">Sci-Fi</a></li>
                  <li><a href="#">classNameics</a></li>
                </ul>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Contribute</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
            </div>
            
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
              <span> <a href="#">Bookstore</a></span>.
                </p>
              </div>
    
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>

    )
}