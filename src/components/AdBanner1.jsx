import React from 'react';
import add1 from '../img/add1.jpg';

const AdBanner1 = () => {
  return (
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='ad-banner'>
          <div className='row'>
            <div className='col-sm-6 col-lg-12 g-0'>
              <img alt='ban' className='img-fluid' src={add1} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdBanner1;