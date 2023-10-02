import React from 'react'

const MobileFilter = () => {
  return (
      <div className='product-filter'>
      <div className='filter-body'>
        <div className="row">
          <div className="col-md-2">
            
          </div>
          <div className="col-md-10">
            <div className="row d-flex justify-content-end">
              <div className="col-8"></div>
              <div className="col-4 d-flex justify-content-end">
                <div className="d-flex justify-content-between align-items-center">
                  <label style={{ whiteSpace: 'pre-wrap' }}>Sort: </label>
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
            <div className="row">
              <div className="col"><h5>FILTERS</h5></div>
              <div className="col d-flex justify-content-end"><button>Reset</button></div>
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
        </div>
    </div>
  )
}

export default MobileFilter