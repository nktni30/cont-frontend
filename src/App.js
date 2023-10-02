import { Route, Routes } from "react-router-dom";
import ShowNav from "./components/ShowNav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import ByBrands from "./Pages/ByBrands";
import ByCategory from './Pages/ByCategory';
import SingleProduct from "./Pages/SingleProduct";
import Sidebar from "./components/Sidebar";
import Whatsapp from "./components/Whatsapp";
import TermsCondition from "./Pages/TermsCondition";
import StoreLocator from "./Pages/StoreLocator";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import ErrorPage from "./Pages/ErrorPage";
// admin

import Dashboard from "./Admin/pages/AdminDashboard"
import CreateCategory from './Admin/pages/CreateCategory'
import CreateSubCategory from "./Admin/pages/CreateSubCategory"
import CreateBrand from "./Admin/pages/CreateBrands"
import CreateProduct from "./Admin/pages/CreateProduct"
import GetProducts from "./Admin/pages/Products"

function App() {
  return (
    <><ShowNav>
      <Sidebar />
    </ShowNav>

      <Whatsapp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:slug" element={<SingleProduct />} />
        <Route exact path="/products/brand/:id" element={<ByBrands />} />
        <Route exact path="/products/category/:id" element={<ByCategory />} />
        
        <Route exact path="/storeLocator" element={<StoreLocator />} />
        <Route exact path="/termsCondition" element={<TermsCondition />} />
        <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/returnPolicy" element={<ReturnPolicy />} />
        <Route exact path="/returnPolicy" element={<ReturnPolicy />} />
        {/* admin */}
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/dashboard/admin/category" element={<CreateCategory />} />
        <Route path="/dashboard/admin/subCategory" element={<CreateSubCategory />} />
        <Route path="/dashboard/admin/brands" element={<CreateBrand />} />
        <Route path="/dashboard/admin/createProduct" element={<CreateProduct />} />
        <Route path="/dashboard/admin/products" element={<GetProducts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  );
}

export default App;
