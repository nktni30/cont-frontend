import React from "react";
import { Link, NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
   <nav className="navbar navbar-dark bg-dark">
  <Link className="navbar-brand" to='/admin'>
    <div className="container">
    <h4 className="text-center">Admin</h4>
    </div>
  </Link>
</nav>
      <div className="col-md-2 ps-0">
        <div className="list-group">
          
          <NavLink
            to="/admin"
            className="list-group-item rounded-0 list-group-item-action"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/admin/category"
            className="list-group-item list-group-item-action"
          >
            Category
          </NavLink>

          <NavLink
            to="/dashboard/admin/subCategory"
            className="list-group-item list-group-item-action"
          >
            Sub-Category
          </NavLink>

          <NavLink
            to="/dashboard/admin/brands"
            className="list-group-item list-group-item-action"
          >
            Brands
          </NavLink>

          <NavLink
            to="/dashboard/admin/createProduct"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item rounded-0 list-group-item-action"
          >
            Products
          </NavLink>
         
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
