import AboutImage from "../../public/aboutSection.jpg";
import VolunteerHands from "../../public/volunteerHands.jpg";
import VolunteerLove from "../../public/volunteerLove.jpg";
import Hands from "../../public/hands.svg";

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
      <section className="volunteerSection" id="volunteer">
        <div className="container">
          <div className="volunteerText">
            <h2>VOLUNTEER WITH US</h2>
            <p>
              MHASF depends on the support of talented and enthusiastic volunteers to help out with an array of ongoing needs and projects. Whether you're interested in lending creative skills such as graphic design or writing, are passionate about mental health policy or advocacy issues, have a knack for administrative support, or want to pitch another way in which you'd like to help us, we want to hear from you!
            </p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img
                src={VolunteerHands}
                alt="volunteering"
                className="volunteerImages"
              />
            </div>
            <div className="col-md-2">
              <img src={Hands} alt="volunteering" className="volunteerImages" />
              <p>Lend a hand</p>
            </div>
            <div className="col-md-5">
              <img
                src={VolunteerLove}
                alt="volunteering"
                className="volunteerImages"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="servicesSection" id="services">
        <div className="container">
          
        </div>
      </section>
    </>
  );
};

export default Page;
