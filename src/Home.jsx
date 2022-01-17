import React from "react";


const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                    <h1>
                    Grow Your Business with <strong className="brand-name">Vinay</strong>
                    </h1>
                    <h2 className="mt-3">
                        we are the team of talented devloper making websites
                    </h2>
                    <div className="mt-3 "> 
                        <a href="" className="btn btn-outline-info">Get Started</a>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img  className="img-fluid animated" alt="home img"/>
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
