import React from 'react';
import ToolsImg from '../img/Exterior-Walls-rhs.png';


const Banner = () => {
      return (
            <>
            <div className='container-fluid banner'>
                  <div className="container pt-5">
                  <div className="row pt-5 pt-lg-5">
                        <div className='col-sm-5 d-flex justify-content-center justify-content-lg-start align-items-lg-center align-items-end'>
                              <div className="rwo">
                              <div className='mt-lg-0 mt-sm-5'>
                              <h1 className='text-center text-lg-start text-white'>Conterials.com</h1>
                              <h6 className='text-center text-lg-start text-white'>
                                    We are<span> Open </span> Now
                                    Please Visit
                                    
                                    Offline Store at : Pragati Path, Samlong Ranchi-01
                              </h6>
                                    
                              </div>
                              </div>
                              
                        </div>
                        <div className='col-sm-7 d-flex justify-content-center align-items-center'>
                              <img className='img-fluid banner-img' src={ToolsImg} alt='banner1'/>
                        </div>
                  </div>
                  </div>
                  </div>
            </>
      )
}

export default Banner;