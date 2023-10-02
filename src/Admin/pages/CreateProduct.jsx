import React, { useState, useEffect } from "react";
import AdminMenu from "../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [brands, setBands] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [productname, setProductName] = useState("");
  const [productdetails, setProductDetails] = useState("");
  const [category, setCategory] = useState("");
  const [brandname, setBrandName] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [popular, setPopular] = useState(false);
  const [offer, setOffer] = useState(false);
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category ");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };
  //get all subcategory
  const getAllSubCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/subcategory/get-subcategory");
      if (data?.success) {
        setSubCategories(data?.subcategory);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };
  // get all brand
  const getAllBrand = async () => {
    try {
      const { data } = await axios.get("/api/v1/brand/get-brand");
      if (data?.success) {
        setBands(data?.brand);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllSubCategory();
    getAllBrand();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("productname", productname);
      productData.append("productdetails", productdetails);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("brandname", brandname);
      productData.append("subcategory", subcategory);
      productData.append("popular", popular);
      productData.append("offer", offer);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">

        <AdminMenu />


        <div className="col-md-9 my-4">
          <h4>Create Product</h4>
          <div className="row">
            <div className="col-md-4">

              <div className="m-1 w-75">
                <Select
                  required={true}
                  bordered={false}
                  placeholder="Select a category"
                  className="form-control mb-3"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>


                <Select
                  bordered={false}
                  placeholder="Select a Subcategory"
                  className="form-control mb-3"
                  onChange={(value) => {
                    setSubCategory(value);
                  }}
                >
                  {subcategories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.subcategoryname}
                    </Option>
                  ))}
                </Select>

                <Select
                  bordered={false}
                  placeholder="Select a Brand"

                  className="form-control mb-3"
                  onChange={(value) => {
                    setBrandName(value);
                  }}
                >
                  {brands?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.brandname}
                    </Option>
                  ))}
                </Select>

                



                <div className="mb-3">
                  <input
                    type="text"
                    value={productname}
                    placeholder="Product Name"
                    className="form-control"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    value={productdetails}
                    placeholder="Product description"
                    className="form-control"
                    onChange={(e) => setProductDetails(e.target.value)}
                  />
                </div>
                <label>Popluar</label>
                <br />
                <input
                  type="checkbox"
                  checked={popular}
                  onChange={(e) => setPopular(e.target.checked)} />


                <br />
                <br />
                <label>On Offer</label>
                <br/>
                <input
                  type="checkbox"
                  checked={offer}
                  onChange={(e) => setOffer(e.target.checked)} />

                <div className="my-3">
                  <button className="btn btn-primary" onClick={handleCreate}>
                    CREATE PRODUCT
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label className="btn btn-outline-dark col-md-12">
                  {photo ? photo.name : "Select Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateProduct;
