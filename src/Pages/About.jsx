import FAQs from '../components/FAQs';
import Footer from "../components/Footer";
import { BsCheck2All, BsGrid3X3GapFill, BsPatchCheckFill } from 'react-icons/bs';
import BannerImg from '../img/about/banner-img.png';
import OurMission from '../img/about/our-mission.jpg';

const About = () => {
  return (
    <>

      <div className='container-fluid bg-blue-grad mb-5'>
        <div className='row  '>
          <div className="container">
            <div className="row row-col-2 about-banner">
              <div className='col-6 d-flex align-items-center justify-content-start justify-content-lg-center ps-5'>
                <h1 className='text-white'>About <br /> Us</h1>
              </div>
              <div className='col-6 d-flex mt-5 justify-content-lg-center justify-content-sm-start'>
                <img alt='banner-img' className='about-banner-img' src={BannerImg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row mb-5'>
          <div className='col-sm-6'>
            <h4 className='text-center h4 mb-3'>
              Company Profile
            </h4>
          </div>
          <div className='col-sm-6'>
            <p className='text-start'>Welcome to Conterials.com, your ultimate one-stop solution for all your construction needs, whether it's new construction, repair, or renovation. With a strong commitment to excellence, we take pride in offering industry leading products, supported by the latest and State of the art Technology, to ensure a hassle free and seamless construction journey of our valued customers.</p>
          </div>
        </div>


        <div className='row mb-5'>
          <div className='col-sm-6 mb-3'>
            <h4 className='text-center h4 mb-3'>
              Our Mission
            </h4>
            <img src={OurMission} className='img-fluid' alt='Our-Mission' />
          </div>
          <div className='col-sm-6'>
            <p className='text-start'>At Conterials.com, our mission is to empower homeowners , builders and contractors with the highest quality construction materials and innovative solutions. We strive to be your trusted partner, providing you with the tools and resources to bring your construction projects to life.</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4 mb-4'>
            <div className='card rounded-0 border-0'>
              <div className='card-body'>
                <div className='about-icons'>
                  <span>
                    <BsPatchCheckFill/>
                  </span>
                </div>
                <div className='h6 about-card-title mb-3'>
                  Top-grade Building Materials
                </div>
                <p>
                  We boast an extensive and carefully curated product range that covers every aspect of construction.
                </p>
              </div>
            </div>
          </div>

          <div className='col-sm-4 mb-4'>
            <div className='card rounded-0 border-0'>
              <div className='card-body'>
                <div className='about-icons'>
                  <span>
                    <BsGrid3X3GapFill />
                  </span>
                </div>
                <div className='h6 about-card-title mb-3'>
                  10+ categories
                </div>
                <p>
                  Paint, Plumbing, Hardware, Heavy material, Tools, Wood, Electricals, Appliances, Tiles, Sanitary, etc
                </p>
              </div>
            </div>
          </div>

          <div className='col-sm-4 mb-5'>
            <div className='card rounded-0 border-0'>
              <div className='card-body'>
                <div className='about-icons'>
                  <span>
                    <BsCheck2All />
                  </span>
                </div>
                <div className='h6 about-card-title mb-3'>
                  200+ SKUs
                </div>
                <p>
                  With over 200+ SKUs (Stock Keeping Units), we offers an extensive selection of construction materials and tools to cater to every project's needs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}

        <FAQs id='faqs' />

      </div>
 <Footer/>

    </>
  )
}

export default About;