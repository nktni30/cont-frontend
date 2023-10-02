import React from 'react';
import Footer from "../components/Footer";
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import BannerImg from "../img/about/banner-img.png";
import { Link } from "react-router-dom";

const StoreLocator = () => {
  return (
    <>
    <div className='container-fluid bg-blue-grad mb-5'>
        <div className='row  '>
          <div className="container">
            <div className="row row-col-2 about-banner">
              <div className='col-6 d-flex align-items-center justify-content-start justify-content-lg-center ps-5'>
                <h1 className='text-white'>Our <br /> Stores</h1>
              </div>
              <div className='col-6 d-flex mt-5 justify-content-lg-center justify-content-sm-start'>
                <img alt='banner-img' className='about-banner-img' src={BannerImg} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row mt-5 mb-5">
          {/* map */}

          <div className="col-sm-12 col-lg-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.9713506234757!2d85.34927387568572!3d23.353052478943464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1e10932fa8d%3A0xbbfe698809a1cdab!2sConterials.com!5e0!3m2!1sen!2sin!4v1694315328055!5m2!1sen!2sin"
             className="add-map mt-5 mb-4"
            title="mapaddress"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* contact */}

          
        </div>

        <div className="row">
        <div className="col-sm-12 col-lg-4 mb-4">
            <div className="card rounded-0 border-0 pt-5 pb-5">
              <div className="row">
                <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-end">
                  <span className="contact-icon">
                    <BsGeoAltFill />
                  </span>
                </div>
                <div className="col-8 col-md-8 col-lg-8 d-flex justify-content-start align-items-center">
                  <div className="contact-font text-lg-start pe-5">
                    Pragati Path, Samlong, Ranchi, Jahrkhand -834001
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 mb-4">
            <div className="card rounded-0 border-0 pt-5 pb-5">
              <div className="row">
                <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-end">
                  <span className="contact-icon">
                    <BsTelephoneFill />
                  </span>
                </div>
                <div className="col-8 col-md-8 col-lg-8 d-flex justify-content-start align-items-center">
                  <div className="contact-font">
                    <div>
                      <Link to="tel:+4733378901">+91 8789523890</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 mb-4">
            <div className="card rounded-0 border-0 pt-5 pb-5">
              <div className="row">
                <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-end align-items-center">
                  <span className="contact-icon">
                    <BsEnvelopeFill />
                  </span>
                </div>
                <div className="col-8 col-md-8 col-lg-8 d-flex justify-content-start  align-items-center">
                  <div className="contact-font">
                    <Link to="mailto:info@conterials.com">info@conterails.com</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

    </>
  )
}

export default StoreLocator;