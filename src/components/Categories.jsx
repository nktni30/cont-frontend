import React, { useState, useEffect } from "react";
import { Navigation, Scrollbar, A11y, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import { Categories } from "../data/categories";
import "swiper/css";
import "swiper/css/free-mode";
import axios from "axios";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <>
      <div className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-sm-12">
              <h5 className="text-center text-md-start text-lg-start">Shop by Categories</h5>
            </div>
          </div>
          <div className="row">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, A11y, Grid]}
              breakpoints={{
                400: {
                  slidesPerView: 3,
                  spaceBetween: 40,

                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 40,

                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 9,
                  spaceBetween: 30,

                }
              }}

              freeMode={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {categories?.map((item) => (
                <SwiperSlide>
                  <Link to={`/products/category/${item._id}`}>
                    <div className="cat-card">
                      <div className="categories-image">
                        <img
                          alt="categories"
                          className="img-fluid"
                          src={`/api/v1/category/category-photo/${item._id}`}
                        />
                      </div>
                      <div className="img-overlay"></div>
                      <div className="categories-title">{item.name}</div>
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

export default Categories;
