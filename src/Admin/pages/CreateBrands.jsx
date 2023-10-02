import React, { useEffect, useState } from "react";
// import { Select } from 'antd';
import AdminMenu from "../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
// import CategoryForm from "../../components/Form/CategoryForm";
// const { Option } = Select;

const CreateBrand = () => {

  // const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandname, setBrandName] = useState("");
  const [photo, setPhoto] = useState("");
  // const [category, setCategory] = useState("");

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const brandData = new FormData();
      brandData.append("brandname", brandname);
      // brandData.append("category", category);
      brandData.append("photo", photo);
      const { data } = await axios.post("/api/v1/brand/create-brand",
        brandData,
      );
      if (data?.success) {
        toast.success(`${brandname} is created`);
        getAllBrand();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
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
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  //get all category
  // const getAllCategory = async () => {
  //   try {
  //     const { data } = await axios.get("/api/v1/category/get-category");
  //     if (data?.success) {
  //       setCategories(data?.category);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something wwent wrong in getting catgeory");
  //   }
  // };

  useEffect(() => {
    // getAllCategory();
    getAllBrand();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">

        <AdminMenu />

        <div className="col-md-9 my-4">
          <h4>Create New brand</h4>
          <br />

          <div className="row">
            <div className="col-md-4">

              <div className="mb-3">
                <input
                  type="text"
                  value={brandname}
                  placeholder="Brand Name"
                  className="form-control"
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>

              {/* <Select
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
              </Select> */}

              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
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


              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  CREATE BRAND
                </button>
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




          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {brands?.map((b) => (
                    <>
                      <tr>
                        <td key={b._id}>{b.brandname}</td>
                        <td><img alt={b.brandname} className="admin-img" src={`/api/v1/brand/brand-photo/${b._id}`} /></td>
                        <td>
                          <button className="btn btn-primary ms-2">Edit</button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBrand;
