import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .site-footer {
    background-color: #26272b;
    padding: 20px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
    text-align: center;
    margin-top: 200px;
  }
  .site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }
  .site-footer a {
    color: #737373;
  }
  .site-footer a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .footer-links {
    padding-left: 0;
    list-style: none;
  }
  .footer-links li {
    display: block;
  }
  .footer-links a {
    color: #737373;
  }
  .footer-links a:active,
  .footer-links a:focus,
  .footer-links a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .footer-links.inline li {
    display: inline-block;
  }

  .site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 3px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
  }
  .copyright-text {
    margin: 0;
  }
  @media (max-width: 991px) {
    .site-footer [class^="col-"] {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    .site-footer {
      padding-bottom: 0;
    }
    .site-footer .copyright-text,
    .site-footer .social-icons {
      text-align: center;
    }
  }
  .social-icons {
    list-style: none;
    margin-top: 10px;
  }
  .social-icons li {
    display: inline-block;
    margin-bottom: 4px;
  }
  .social-icons li.title {
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px;
  }
  .social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
  .social-icons a:active,
  .social-icons a:focus,
  .social-icons a:hover {
    color: #fff;
    background-color: #29aafe;
  }
  .social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }
  .social-icons a.facebook:hover {
    background-color: #3b5998;
  }
  .social-icons a.twitter:hover {
    background-color: #00aced;
  }
  .social-icons a.linkedin:hover {
    background-color: #007bb6;
  }
  .social-icons a.dribbble:hover {
    background-color: #ea4c89;
  }

  /*styling the footer*/
  .footer-row {
    height: auto;
    text-align: justify;
    -ms-text-justify: distribute-all-lines;
    text-justify: distribute-all-lines;
    /* just for demo */
    min-width: 612px;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
  }

  #social-media-footer,
  #products-footer,
  #contact-footer {
    width: 30%;
    height: auto;
    vertical-align: top;
    display: inline-block;
  }

  #social-media-footer ul li a {
    display: inline block;
  }
  #products-footer ul li,
  #contact-footer ul li {
    list-style: none;
  }

  @media (max-width: 767px) {
    .social-icons li.title {
      display: block;
      font-weight: 600;
    }
    #social-media-footer,
    #products-footer,
    #contact-footer {
      width: 30%;
      height: auto;
      display: block;
    }
    #contact-footer {
      width: 100%;
    }
  }
`;

function Footer() {
  return (
    <Styles>
      <footer className="site-footer">
        <div className="footer-row">
          <div className="col-md-8" id="social-media-footer">
            <h3>LoneStarMeters</h3>
            <p>
              We probvide magnificent services to pilots and provate plane
              owners. Seriously, you should join us, and start using the
              services that we now provide to more than 50,000 clients around
              the country.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12" id="products-footer">
            <h3>Products</h3>
            <ul>
              <li>Our first Product</li>
              <li>Our second Product</li>
              <li>Our third Product</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12" id="contact-footer">
            <h3>Contact Us</h3>
            <ul>
              <li>
                Email: <a href="mailto:emailus@email.com">emailus@email.com</a>
              </li>
              <li>Phone: +1 333-333-3333</li>
            </ul>
            <ul className="social-icons col-sm-6 col-xs-12">
              <li>
                <a className="facebook" href="/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="/">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="/">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <span class="stretch"></span>
        </div>
      </footer>
    </Styles>
  );
}

export default Footer;
