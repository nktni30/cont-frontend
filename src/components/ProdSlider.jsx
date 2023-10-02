import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ProdSlider = ({ prodimgs }) => {
      console.log(
            prodimgs
      );
      return (
<>
<Swiper
modules={[Pagination, A11y, Navigation]}
pagination={{
      dynamicBullets: true,
}}

className="mySwiper"
>
{
      prodimgs && prodimgs.map((curElm, index)=>{
            return(
                  <SwiperSlide>
                  <figure>
                        <img 
                        src={curElm.url}
                        alt={curElm.filename}
                        className='img-fluid'
                        key={index}
                        />
                  </figure>
                  </SwiperSlide>
            )
      })
}
</Swiper>
</>
            // <div className='row mb-2'>
            //       <div className='col-sm-12'>
            //             <div className='product-img-container bg-light'>
            //                   {imgs.map((curElm, index) => {
            //                         return (
            //                               <figure>
            //                               <img className='single-prod-img'
            //                                     alt={curElm.filename}
            //                                     src={curElm.url}
            //                                     key={index}
            //                               />
            //                               </figure>
            //                         )
            //                   })}

            //             </div>
            //       </div>
            // </div>
      )
};

export default ProdSlider;