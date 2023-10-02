import React from 'react';
import { BsBagCheck, BsShop, BsCurrencyRupee, BsPersonWorkspace } from 'react-icons/bs';

const promises = () => {
      return (
            <>


                  <div className="container my-5">
                        <div className='row'>
                              <h5 className='text-center'>Our Promises</h5>
                        </div>
                        <div className="row row-cols-2 row-cols-lg-4 mt-3 mb-5 justify-content-between">
                              <div className="col mb-4">
                                    <div className='pro-card text-center'>
                                          <span className='promise-icons'>
                                          <BsBagCheck/>
                                          </span>
                                          <div className='text-primary h6 mt-3'>Original</div>
                                          
                                          <div className='h6'>Product Gaurantee</div>
                                    </div>
                              </div>
                              <div className="col"><div className='pro-card text-center'>
                                    <span className='promise-icons'>
                                    <BsShop/>
                                    </span>
                                    <div className='text-primary h6 mt-3'>All under one roof</div>
                                    <div className='h6'>Unbaised Products Comparison</div>
                              </div></div>
                              <div className="col"><div className='pro-card text-center'>
                                    <span className='promise-icons'>
                                          <BsCurrencyRupee/>
                                    </span>
                                    <div className='text-primary h6 mt-3'>Whosale</div>
                                    <div className='h6'>Pricing</div>
                              </div></div>
                              <div className="col"><div className='pro-card text-center'>
                                    <span className='promise-icons'>
                                          <BsPersonWorkspace/>
                                    </span>
                                    <div className='text-primary h6 mt-3'>40+ Prodcut Experts</div>
                                    <div className='h6'>Learn what is right for you</div>
                              </div></div>
                        </div>
                  </div>
            </>
      )
}

export default promises;