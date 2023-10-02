import React from "react";
import AdminMenu from "../components/AdminMenu";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
       
          <AdminMenu />
        
        <div className="col-md-9 my-4">
          <h1 style={{textAlign:"center"}} >Welcome to admin Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
