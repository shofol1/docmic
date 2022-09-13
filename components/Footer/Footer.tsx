import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/Footer.module.css";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <span className={`${styles.logoLeft}`}>Doc</span>
              <span className={`${styles.logoRight}`}>mic</span>
              <p className={`${styles.footerPara}`}>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has bee
              </p>
              <div className="social d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={`${styles.iconSocial}`}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={`${styles.iconSocial}`}
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={`${styles.iconSocial}`}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={`${styles.iconSocial}`}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  className={`${styles.iconSocial}`}
                />
              </div>
              <p className={`${styles.copyrights}`}>
                Copyright @222 Medicom All Rights Reserved
              </p>
            </div>
            <div className="col-md-3">
              <p className={`${styles.linkHeading}`}>Quick Links</p>
              <a href="" className={`${styles.footerLinks}`}>
                About Us
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Our Pricing
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Our Gallery
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Appointment
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Privacy Policy
              </a>
            </div>
            <div className="col-md-3">
              <p className={`${styles.linkHeading}`}>Quick link</p>
              <a href="" className={`${styles.footerLinks}`}>
                About Us
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Our Pricing
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Our Gallery
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Appointment
              </a>
              <a href="" className={`${styles.footerLinks}`}>
                Privacy Policy
              </a>
            </div>
            <div className="col-md-3">
              <p className={`${styles.linkHeading}`}>Opening Hours</p>
              <div className="row">
                <div className="col-md-4">Mon- Tue</div>
                <div className="col-md-8">08:00 AM- 05:00 PM</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-4">Mon- Tue</div>
                <div className="col-md-8">08:00 AM- 05:00 PM</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-4">Mon- Tue</div>
                <div className="col-md-8">08:00 AM- 05:00 PM</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-4">Mon- Tue</div>
                <div className="col-md-8">08:00 AM- 05:00 PM</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-4">Mon- Tue</div>
                <div className="col-md-8">08:00 AM- 05:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
