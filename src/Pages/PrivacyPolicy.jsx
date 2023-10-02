import React from 'react'
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
   <>

<div className="container-fluid bg-blue-grad py-5">
    <h2 className='h2 text-center pt-5 text-white'>
    Privacy Policy for Conterials.com
          </h2>
    </div>
   <div className='container my-5'>
      <div className='row mb-3'>
        <div className='col-sm-12'>
          <p>This Privacy Policy explains our commitment to your privacy and outlines how we handle any information when you access or use the website conterials.com ("Website"). Please read this Policy carefully to understand our practices.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          No Data Collection
          </h5>
          <p>We want to assure you that we do not collect any personal information, usage data, or any other form of data from visitors to our Website.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Cookies and Tracking Technologies
          </h5>
          <p>We do not use cookies or any tracking technologies on our Website.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Third-Party Links
          </h5>
          <p> Our Website may contain links to third-party websites. However, we have no control over the content or practices of these websites, and this Privacy Policy does not apply to them. We encourage you to review the privacy policies of any third-party websites you visit.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Changes to this Privacy Policy
          </h5>
          <p>We may update or modify this Privacy Policy from time to time. Any changes will be posted on the Website</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Contact Us
          </h5>
          <p> If you have any questions or concerns about this Privacy Policy or your privacy while using our Website, please feel free to contact us at</p>
          <a className='nav-link text-primary' href='mailto:conterials.contact@gmail.com'>conterials.contact@gmail.com</a>
        </div>
      </div>

      </div>
      <Footer/>
   </>
  )
}

export default PrivacyPolicy;