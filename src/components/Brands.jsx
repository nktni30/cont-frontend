import React, { useEffect, useState } from "react";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import axios from "axios";
import { Link } from "react-router-dom";

const Brands = () => {

  const [brands, setBrands] = useState([]);

  //get all cat
  const getAllBrand = async () => {
    try {
      const { data } = await axios.get("/api/v1/brand/get-brand");
      if (data?.success) {
        setBrands(data?.brand);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBrand();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row mb-3">
          <div className="col-sm-12">
            <h5 className="text-center text-lg-start">Shop by Brands</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 ">
            <Swiper
              // install Swiper modules
              modules={[Grid]}
              breakpoints={{
                400: {
                  slidesPerView: 4,
                  spaceBetween: 20,

                },
                500: {
                  slidesPerView: 4,
                  spaceBetween: 20,

                },
                600: {
                  slidesPerView: 4,
                  spaceBetween: 20,

                },
                768: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,

                }
              }}
            >
              {brands?.map((b) => (
                <SwiperSlide>
                  <Link
                    key={b._id}
                    to={`/products/brand/${b._id}`}>
                    <div className="brand-card">
                      <img alt={b.brnadname} className="brand-img" src={`/api/v1/brand/brand-photo/${b._id}`} />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

      </div>
    </>
  );
};

export default Brands;
