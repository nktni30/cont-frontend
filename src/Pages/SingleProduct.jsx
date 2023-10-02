import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

  const params = useParams()
  const [product, setProduct] = useState({});

  //initial details
  useEffect(() => {
    if (params?.slug) getProduct();
    // eslint-disable-next-line
  }, [params?.slug])

  //getproducts
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="container-fluid bg-blue-grad py-5">
        <h2 className='h2 text-center pt-5 text-white'>
          Product Details
        </h2>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <div className="col-md-6">
            <figure>
              <img className='img-fluid' alt={product?.productname} src={`/api/v1/product/product-photo/${product._id}`} />
            </figure>
            {/* {JSON.stringify(product, null, 4)} */}
            {/* <ProdSlider prodimgs={image} /> */}
          </div>
          <div className="col-md-6">
            <div className='row mb-2'>
              <div className='col-6'>
                <h5>{product?.productname}</h5>
              </div>
              <div className='col-6 d-flex justify-content-end'>
               
                <img alt={product} className='single-brand-img' src={`/api/v1/brand/brand-photo/${product?.brandname?._id}`} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-6">
              {product?.offer ? (
                                <div className="offer-tag my-2 py-2 px-3">ON OFFER</div>
                              ) : (
                                ''
                              )}
              </div>
              <div className="col-sm-6"></div>
            </div>
            {/* <div className='row mb-2'>
              <div className='col-2 d-flex align-items-center'>
                <div><h6>Size:</h6></div>
              </div>
              <div className='col-10 d-flex justify-content-start'>
                <div className='pe-3'> 2 Meter </div>
                <div className=''> 4 Meter </div>
              </div>
            </div> */}
            <div className='row'>
              <div className='col-6 d-flex justify-content-start'>
                <h6 style={{whiteSpace: 'pre-wrap'}}>Category: </h6><span>{product?.category?.name}</span>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='bg-white border-0 rounded-0 p-3'>
                  <h6>Description</h6>
                  <p>{product?.productdetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleProduct;