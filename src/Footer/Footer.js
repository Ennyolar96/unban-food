import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="footer text-center text-lg-start fixed-bottom">
      <div className="container p-4 ne">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h6 className="text-uppercase">Urban Food</h6>
            <hr />
            <p>Our social handles</p>
            <i class="fa fa-facebook btn btn-primary"></i>
            <i class="fa fa-twitter btn btn-info text-white m-1"></i>
            <i class="fa fa-instagram btn btn-danger"></i>
          </div>
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h6 class="text-uppercase">Quick Links</h6>
            <hr />
            <ul>
              <li>
                <Link to="/about" className="link-style">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/product" className="link-style">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-style">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
    <div>

      <div className="container p-4 ne-1">
        <div className="col-lg-12 col-md-12 mb-4 mb-md-0">
          ©{date} Copyright ::: Group 100
        </div>
      </div>
    </footer>
  )
}

export default Footer
