import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [Checked, setChecked] = useState([]);


  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      // toast.error("Someething Went Wrong");
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  // filterby cat
  const HandleFilter = (value, id) => {
    let all = [...Checked]
    if (value) {
      all.push(id)
    } else {
      all = all.filter((c) => c !== id)
    }
    setChecked(all);
  };



  //lifecycle method 
  useEffect(() => {
    getAllBrand();
    getAllCategory();
  }, []);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`/api/v1/product/product-filters`, { Checked })
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!Checked.length) getAllProducts();
  }, [Checked.length])

  useEffect(() => {
    if (Checked.length) filterProduct();
    // eslint-disable-next-line
  }, [Checked])

  return (
    <>
      <div className="container-fluid bg-blue-grad py-5">
        <h2 className='h2 text-center pt-5 text-white'>
          Our Products
        </h2>
      </div>

      <div className="container-fluid px-md-5 px-0 px-lg-5 my-5">
        <div className="row mx-0 mx-md-5 mx-lg-5">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2">
                
              </div>
              <div className="col-md-10">
                <div className="row d-flex justify-content-end">
                  <div className="col-8"></div>
                  <div className="col-4 d-flex justify-content-end">
                    <div className="d-flex justify-content-between align-items-center">
                    <label style={{whiteSpace: 'pre-wrap'}}>Sort: </label>
                    <select className="sort-products" type="select">
                      <option value="Relevance">Relevance</option>
                      <option value="Products">New Products</option>
                      <option value="Old Products">Old Products</option>
                    </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-sm-12 col-lg-2">
                {/* prodyct filter */}
                <div className='product-filter'>
                  <div className='filter-body'>
                  <div className="row">
                  <div className="col"><h5>FILTERS</h5></div>
                  <div className="col d-flex justify-content-end"><button className="btn btn-sm btn-primary">Reset</button></div>

                </div>
                    <hr />
                    <div className='row'>
                      <h6 className=''>Categories</h6>
                      <div className='row-cols-auto'>
                        {categories?.map((c) => (
                          <div className='filter-categories cat'>
                            <label>
                              <input type='checkbox' key={c._id} onChange={(e) => HandleFilter(e.target.checked, c._id)} /><span>{c.name}</span>
                            </label>
                          </div>
                        ))}
                      </div>

                    </div>
                    <hr />
                    <div className='row'>
                      <h6 className=''>Brands</h6>
                      <div className='row-cols-auto'>
                        {brands?.map((b) => (
                          <div className='filter-categories cat'>
                            <label>
                              <input type='checkbox' key={b._id} onChange={(e) => HandleFilter(e.target.checked, b._id)} /><span>{b.brandname}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr />
                    {/* <div className='row'>
                      <h6 className=''>Color</h6>
                      <div className='color-select-'></div>
                    </div>
                    <hr /> */}
                    {/* <div className='row d-flex justify-content-evenly'>
                      <div className='col'>
                        <button type='button' className='btn btn-outline-primary'>Clear</button>
                      </div>
                      <div className='col d-flex justify-content-end'>
                        <button className='btn btn-primary'>Apply</button>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* filter end */}
              </div>
              <div className="col-md-10 col-lg-10 col-sm-12 col-12 mt-3">
                <div className="row row-cols-lg-4">
                  {products?.map((p) => (

                    <Link to={`/product/${p.slug}`} className="text-decoration-none">
                      <div className="col mb-3">
                        <div className="card product-card px-md-3 py-lg-4 py-2 rounded-0 border-0">
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

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
