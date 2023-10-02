import React from "react";

export function Prod({ productname, price, photo }) {
  return (
    <>
      <div className="col-lg-3 col-12 col-md-4">
        <div className="card p-3 pb-0 rounded-0 border-0">
          <div className="row">
            <div className="col-5 col-lg-12 d-flex justify-content-center align-items-center">
              <div className="prod-img">
                <img className="img-fluid" src={photo} alt="prod" />
              </div>
            </div>
            <div className="col-7 col-lg-12 justify-content-start">
              <div className="product-name mb-3">{productname}</div>
              <div className="offer-tag my-2 py-2 px-3">{price}</div>
              <div className="product-details my-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
