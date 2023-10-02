import React from 'react';
import { FaqsLists } from './Accordian';
import { FaqsList } from '../data/faq';
import FaqImage from '../img/about/faq-image.png';

const FAQs = () => {
  return (
    <>
      <div className='row mb-4'>
        <h4 className='text-center h4 mb-4'>
          FAQs
        </h4>
        <div className='col-sm-6'>
          <img className='img-fluid' src={FaqImage} alt='faq'></img>
        </div>
        <div className='col-sm-6'>

          <div className='accordian' id='accordianExample'>
            {FaqsList && FaqsList.map((item) =>

              <FaqsLists
                Question={item.Question}
                Answer={item.Answer}
                HId={item.HId}
                BId={item.BId}
                Target={item.Target}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQs;