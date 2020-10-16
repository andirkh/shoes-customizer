import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center my-5">
          <span>by @andirkh</span>
        </div>
        <div className="d-flex justify-content-center align-items-center px-3 py-4 bg-light">
          <p className="text-center">
            {`Question, Improvement or Partnership:  `}
            <a
              href="mailto:andirkh.ui.engineer@icloud.com"
              target="_blank"
              className="ml-2 text-primary"
            >
              Contact Me
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
