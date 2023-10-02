import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const ByBrands = () => {

  const [products, setProducts] = useState([]);
  const params = useParams();

  //getall products
  const getAllProductsByBrand = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/brandname/${params.id}`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      // toast.error("Someething Went Wrong");
    }
  };

  useEffect(() => {
    getAllProductsByBrand();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="container-fluid bg-blue-grad py-5">
        <h2 className='h2 text-center pt-5 text-white'>
          Products By Brand
        </h2>
      </div>

      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md- col-lg-3">
              <div className="brand-logo-container d-flex align-items-center">
                <img alt={products?.brandname} className='brand-logo' src={`/api/v1/brand/brand-photo/${params.id}`} />
              </div>

            </div>
            <div className="col-sm-8"></div>
          </div>
        </div>
      </div>
      <div className="container my-2 my-lg-5">

        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-12">
            <div className="row row-cols-lg-4">
              {products?.map((p) => (
                <Link to={`/product/${p.slug}`} className="text-decoration-none">
                  <div className="col mb-3">
                    <div className="card px-md-3 py-lg-4 py-2 rounded-0 border-0">
                      <div className="row">
                        <div className="col-lg-12 col-5">
                          <div className="prod-img d-flex justify-content-center align-items-center">
                            <img
                              className="img-fluid"
                              src={`/api/v1/product/product-photo/${p?._id}`}
                              alt={p.name}
                            />
                          </div>
                        </div>
                        <div className="col-7 col-lg-12 justify-content-start">
                          <div className="product-name my-3">{p?.productname} | {p?.brandname?.brandname}</div>
                          {p?.offer ? (
                            <div className="offer-tag my-2 py-2 px-3">ON OFFER</div>
                          ) : (
                            ''
                          )}
                          <div className="product-details mt-3">
                            {p.productdetails}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ByBrands;
