import React from "react";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import PopularProducts from "../components/Popular";
import AdBanner1 from "../components/AdBanner1";
import Brands from "../components/Brands";
import Promises from "../components/Promises";
import Banner from "../components/Banner";

const Home = () => {
      return (
            <>
                  <Banner/>
                  <Categories />
                  <PopularProducts/>
                  <AdBanner1/>
                  <Brands/>
                  <Promises/>
                  <Footer/>
                  </>
      )
}

export default Home;