import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPhone 14 Pro Max.</h5>
                  <p>From $1923.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-15 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best sale</h4>
                    <h5>Laptops Max.</h5>
                    <p>From $1773.00 <br /> or $67/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $46.00 <br /> for 12 mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smartwatch</h5>
                    <p>Shop the latest brand <br /> style and colors</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Free</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback <br /> & ultra-low distortion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
