import React, { useEffect, useState } from "react";
import AdminMenu from "../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
// import CategoryForm from "../../components/Form/CategoryForm";

// import { Modal } from "antd";
const CreateCategory = () => {

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const categorytData = new FormData();
      categorytData.append("name", name);
      categorytData.append("photo", photo);
      const { data } = await axios.post("/api/v1/category/create-category",
        categorytData,
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
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
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">

        <AdminMenu />

        <div className="col-md-9 my-4">
          <div className="row">
            <h4>Create New Category</h4>
            <br />
            <div className="col-md-6">
              <div className="m-1 w-75">
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="Category Name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

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
                    CREATE CATEGORY
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
            <div className="row">
              <div className="col-sm-12 col-lg-12">
               
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories?.map((c) => (
                        <>
                          <tr>
                            <td key={c._id}>{c.name}</td>
                            <td><img key={c.id} alt={c.name} className="admin-img" src={`/api/v1/category/category-photo/${c._id}`}/></td>
                            <td>
                              <button className="btn btn-sm btn-primary ms-2">Edit</button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
              
              </div>


              {/* <div className="p-3 w-50">
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </div> */}

            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
