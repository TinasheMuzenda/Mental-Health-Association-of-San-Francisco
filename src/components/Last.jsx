import footerImage from "../../public/healthNetwork.jpg";

const Last = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footerLeft">
              <h4 className="bold">Quick Links</h4>
              <ul>
                <li>
                  <a href="#">
                    <span className="bold">HOME</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="bold">ABOUT US</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="bold">TAKE ACTION</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="bold">SERVICES</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="bold">Warm line 855-600-WARM </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footerCenter">
              <div className="footerParagraph">
                <h5 className="bold">24/7 California Peer-Run Warm Line</h5>
                <h5 className="bold">855-600-WARM</h5>
              </div>
              <img
                src={footerImage}
                alt="Health Network"
                className="footerImage"
              />
            </div>
            <div className="col-md-4 footerRight">
              <h4 className="bold">Contact</h4>
              <ul>
                <li>
                  <a href="tel:855-845-7415" target="_blank">
                    <span className="bold">855-845-7415</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mentalhealthsf.org" target="_blank">
                    <span className="bold">info@mentalhealthsf.org</span>
                  </a>
                </li>
                <li>
                  <a href="https" target="_blank">
                    <span className="bold">870 Market Street, Suite 928</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="bold">San Francisco, CA 94102</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Last;
