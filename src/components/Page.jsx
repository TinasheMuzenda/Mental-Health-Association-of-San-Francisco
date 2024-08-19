import AboutImage from "../../public/aboutSection.jpg";

const Page = () => {
  return (
    <>
      <section className="homeSection" id="banner">
        <div className="container">
          <div className="homeContent">
            <h1>
              Mental Health Association of <span>San Francisco</span>
            </h1>
            <div className="buttons">
              <button>Contact Us</button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSection" id="about">
        <div className="container">
          <div className="aboutHeading">
            <h2>ABOUT US</h2>
          </div>
          <div className="row aboutRow">
            <div className="col-md-6 aboutLeft">
              <img src={AboutImage} alt="About Image" className="aboutImage" />
            </div>
            <div className="col-md-6 aboutRight">
              <div className="aboutSubHeading">
                <h3>
                  <span>Introduction</span> To MHASF
                </h3>
              </div>
              <div className="aboutParagraph">
                <p>
                  We are a non-profit cultivating peer leadership, building
                  community, and advancing social justice in mental health.We
                  rely on small donations to provide accessible mental health
                  services to our community. If you can donate today, it will go
                  a long way towards helping others.
                </p>
              </div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
