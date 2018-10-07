import React from "react";
import Helmet from "react-helmet";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Link } from "gatsby";

import SiteHeader from "../components/SiteHeader";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import "./all.scss";

library.add(faFacebook, faInstagram, faTwitter);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="robots" content="noindex, nofollow"/>
    </Helmet>
    <SiteHeader />
    <div className="mt-5">{children}</div>
    <footer id="footer" className="text-white bg-brown py-4">
      <Container>
        <Row>
          <Col md="8">
            <Row>
              <div className="col-md-6 hidden-xs hidden-sm">
                <nav role="navigation">
                  <p className="text-uppercase border-bottom border-white">
                    Follow Us
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to="/" title="Facebook">
                        fdsa
                        <FontAwesomeIcon icon="facebook fab" />
                        <i class="fab fa-facebook" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/" title="Twitter">
                        <FontAwesomeIcon icon="twitter" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/" title="Instagram">
                        <FontAwesomeIcon icon="instagram" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-6 hidden-xs hidden-sm">
                <p className="text-uppercase border-bottom border-white">
                  <Link to="/">Latest Press</Link>
                </p>
                <p>
                  <Link to="/">Press Article Link</Link>
                </p>
              </div>
            </Row>
            <Row>
              <div className="col-md-6">
                <nav className="contact-us" role="navigation">
                  <p className="text-uppercase border-bottom border-white">
                    <Link to="/">Contact Us</Link>
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">The Plaza Hotel</Link>
                    </li>
                    <li>
                      <Link to="/">Midtown - 55th St.</Link>
                    </li>
                    <li>
                      <Link to="/">Grand Central Terminal</Link>
                    </li>
                    <li>
                      <Link to="/">Downtown - FiDi</Link>
                    </li>
                    <li>
                      <Link to="/">Saks Fifth Avenue</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-6">
                <div className="hidden-xs hidden-sm">
                  <p className="text-uppercase border-bottom border-white">
                    <Link to="/">Tips from the Experts</Link>
                  </p>
                  <p>
                    <Link to="/">Protect Suede</Link>
                  </p>
                </div>
                <div className="mailing-list">
                  <Form>
                    <Label
                      for="mailingList"
                      className="d-block text-uppercase border-bottom border-white"
                    >
                      Mailing List
                    </Label>
                    <FormGroup className="form-inline">
                      <Input
                        type="email"
                        name="email"
                        id="mailingList"
                        placeholder="Email Address"
                      />
                      <Button>Sign Up</Button>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </Row>
          </Col>
          <div className="col-md-4">
            <p className="text-uppercase border-bottom border-white">
              <Link to="/">Accessibility</Link>
            </p>
            <p>
              If you are having any difficulty using this website, please
              contact the Help Desk at <Link to="/">info@leatherspa.com</Link>{" "}
              or <Link to="/">(718) 392-9220</Link>. Please identify the webpage
              address or URL and the specific problems you have encountered and
              we will address the issue or assist you over the phone.
            </p>
          </div>
        </Row>
        <Row>
          <div className="col-xs-11">
            <small>
              &copy; 2008-2018 LEATHER SPA. All Rights Reserved Worldwide.
              <Link to="/">Home</Link>
              &nbsp;/&nbsp;
              <Link to="/">Privacy Policy</Link>
              &nbsp;/&nbsp;
              <Link to="/">Operational Policies</Link>
              &nbsp;/&nbsp;
              <Link to="/">Help Center</Link>
              &nbsp;/&nbsp;
              <Link to="/">Made in NYC</Link>
            </small>
          </div>
        </Row>
      </Container>
    </footer>
  </div>
);

export default TemplateWrapper;
