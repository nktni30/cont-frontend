import React, { useState, useEffect } from "react";
import AdminMenu from "../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
// import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateSubCategory = () => {
  const [categories, setCategories] = useState([]);
  const [subcategoryname, setSubCategoryName] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState([]);

  // get all category fro dropdown
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  //get all subcategories

  const getAllSubCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/subcategory/get-subcategory");
      if (data?.success) {
        setSubCategory(data?.subcategory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting sub-catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllSubCategory();
  }, []);


  // create subcategory

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const subCategoryData = new FormData();
      subCategoryData.append("subcategoryname", subcategoryname);
      subCategoryData.append("category", category);
      const { data } = axios.post(
        "/api/v1/subcategory/create-subcategory",
        subCategoryData,
      );
      if (data?.success) {
        toast.error(data?.message);
        getAllSubCategory();
      } else {
        toast.success(" subcategory Created Successfully");
        
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <AdminMenu/>


        <div className="col-md-9 my-4">
          <h4>Create subcategory</h4>

          <div className="row">
            <div className="col-md-4">
              <Select
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

              <div className="mb-3">
                <input
                  type="text"
                  value={subcategoryname}         
                  placeholder="Sub Category Name"
                  className="form-control"
                  onChange={(e) => setSubCategoryName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE SUBCATEGORY
                </button>
              </div>
            </div>
          </div>

          {/* data */}

          <div className="row">
            <div className="col-sm-12">
             
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subcategory?.map((b) => (
                        <>
                          <tr key={b._id}>
                            <td >{b.subcategoryname}</td>
                            <td>{b.category.name}</td>
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

export default CreateSubCategory;
