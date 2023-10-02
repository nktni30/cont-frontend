import React from 'react';
import Logo from '../img/logo-white.png';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    <footer>
      <div className='container-fluid bg-blue-grad'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
              <div className='col-lg-3 col-md-3 col-sm-12 my-lg-5'>
                <div className='row '>
                  <div className="col-md-12 mt-3">
                  <Link to={"/"}>
                    <img className='img-fluid px-5' src={Logo} alt='footer-logo' />
                  </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-12 my-lg-5'>
                <div className='row text-center text-lg-start text-white'>
                  <div className='h5 my-4 footer-heading'>Navigation</div>
                  <ul className='footer-links'>
                    <li><Link to={"/About"} className='con-footer-link text-white text-decoration-none'>About Us</Link></li>
                    <li><Link to={"/Contact"} className='con-footer-link text-white text-decoration-none'>Contact Us</Link></li>
                    <li><Link to={"/About"} className='con-footer-link text-white text-decoration-none'>FAQs</Link></li>
                    {/* <li><Link to={"/Career"} className='con-footer-link text-white text-decoration-none'>Career</Link></li> */}
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-3 col-sm-12 my-lg-5'>
                <div className='row text-center text-lg-start text-white'>
                  <div className='h5 my-4 footer-heading'>Quick Links</div>
                  <ul className='footer-links'>

                    <li><Link to={"/TermsCondition"} className='con-footer-link text-white text-decoration-none'>Terms & Condition</Link></li>
                    <li><Link to={"/PrivacyPolicy"} className='con-footer-link text-white text-decoration-none'>Privacy Policy</Link></li>
                    <li><Link to={"/ReturnPolicy"} className='con-footer-link text-white text-decoration-none'>Return Policy</Link></li>
                    <li><Link to={"/StoreLocator"} className='con-footer-link text-white text-decoration-none'>Store Locator</Link></li>
                    {/* <li><Link to={"/Career"} className='con-footer-link text-white text-decoration-none'>Career</Link></li> */}
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-3 col-sm-12 my-lg-5'>
                <h5 className='h5 my-4 text-white text-center text-lg-start footer-heading'>Follow us </h5>
                <div className='footer-icons d-flex justify-content-evenly justify-content-lg-start'>
                  <div className='me-4 text-white'>
                    <Link target='_blank' className='text-white' to="https://www.instagram.com/conterials">
                    <BsInstagram />
                    </Link>
                  </div>
                  <div className='me-4 text-white'>
                    <Link target='_blank' className='text-white' to="https://in.linkedin.com/company/conterials">
                    <BsLinkedin />
                    </Link>
                    
                  </div>
                  <div className='me-4 text-white'>
                    <Link target='_blank' className='text-white' to="https://twitter.com/conterials">
                    <BsTwitter />
                    </Link>
                  </div>
                </div>
              </div>
              <hr className='footer-hr mt-4'></hr>
            
          </div>

          <div className='row text-center'>
            <div className='my-3 text-white'>2023 Conterials.com | All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;