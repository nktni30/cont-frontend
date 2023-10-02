import React, { useState, useEffect } from "react";
import AdminMenu from "../components/AdminMenu";
import axios from "axios";

const baseUrl = "https://conterials-backend.onrender.com"

const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      // console.log(error);

    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    
    <div className="container-fluid">
    <div className="row">
      <AdminMenu/>
        
        <div className="col-md-9 my-4">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div
                key={p._id}
                to={`${baseUrl}/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`${baseUrl}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.productname}</h5>
                    <p className="card-text">{p.productdetails}</p>
                    <p>{p.brandname.brandname}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
</div>
</div>
  
  );
};

export default Products;
