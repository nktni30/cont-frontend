import React from 'react';
import Footer from "../components/Footer";

const ReturnPolicy = () => {
  return (
    <>
        <div className="container-fluid bg-blue-grad py-5">
    <h2 className='h2 text-center pt-5 text-white'>
    Return Policy for Conterials.com
          </h2>
    </div>
    <div className='container my-5'>
      <div className='row mb-3'>
        <div className='col-sm-12'>
          <p>At Conterials, we strive to provide you with the best shopping experience. We understand that occasionally, you may need to return a product. Please review our return policy carefully to ensure a smooth process.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Returns Accepted
          </h5>
          <p>We accept all returns, no questions asked, within the specified timeframe.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Condition of the Product
          </h5>
          <p>The returned product must be in the same condition as when you received it. It should be unused, undamaged, and in its original packaging.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Timeframe for Returns
          </h5>
          <p>You can initiate a return within 7 days from the date of purchase.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Proof of Purchase
          </h5>
          <p>To process a return, you must provide a valid proof of purchase, which includes the original purchase receipt or bill.</p>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Refund or Exchange
          </h5>
          <p>No refunds are provided</p>
          
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Exception
          </h5>
          <p>The following items are not eligible for return:</p>
          <ul>
            <li>Personalized or customized products.</li>
            <li>Products marked as non-returnable at the time of purchase.</li>
          </ul>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-12'>
          <h5 className='h5'>
          Contact Us
          </h5>
          <p>If you have any questions or need assistance with the return process, please contact our customer service team at</p>
          <a className='nav-link text-primary' href='mailto:conterials.contact@gmail.com'>conterials.contact@gmail.com</a>
        </div>
      </div>

      </div>
      <Footer/>
    </>
  )
}

export default ReturnPolicy;