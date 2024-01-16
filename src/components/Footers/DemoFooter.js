/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { FaSalesforce } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.salesforce.com/trailblazer/dhickox1"
                  target="_blank"
                >
                <FaSalesforce className="fa  " />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCeHPkw1Uk9QhMTu35Yf1FBQ/featured"
                  target="_blank"
                >
                  <FaYoutube className="fa"/>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dennis-hickox-1b0a10227"
                  target="_blank"
                >
                  <FaLinkedin className="fa" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/frozzel"
                  target="_blank"
                >
                 <FaGithub className="fa"/>

                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Dennis Hickox
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
