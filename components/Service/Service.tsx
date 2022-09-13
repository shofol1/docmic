import React from "react";
import styles from "../../styles/Service.module.css";
import heartImage from "../../images/heart-pulse-fill.svg";
import frameImage from "../../images/Frame.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faClipboard,
  faCoffee,
  faHeartPulse,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
export default function Service() {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className="container pt-5 pb-5">
          <h3 className={styles.heading}>Our Services</h3>
          <h2 className={styles.subheading}>Services For Your Health</h2>
          <div className={`row   ${styles.colCardContainer}`}>
            <div className={`col-md-3 ${styles.serviceCol}`}>
              <div className="d-flex justify-content-between p-2">
                <h6 className={`${styles.serviceHeading}`}>Cardiology</h6>
                <FontAwesomeIcon
                  icon={faHeartPulse}
                  className={`${styles.serviceIcon}`}
                />
              </div>
              <p className={`${styles.servicePragaraph}`}>
                Seduahag perspiciati under omnised atused error.
              </p>
              <a href="" className={`${styles.serviceBtn}`}>
                Explore Now
              </a>
            </div>
            <div className={`col-md-3 ${styles.serviceCol} p-2`}>
              <div className="d-flex justify-content-between">
                <h6 className={`${styles.serviceHeading}`}>Cardiology</h6>
                <FontAwesomeIcon
                  icon={faClipboard}
                  className={`${styles.serviceIcon}`}
                />
              </div>
              <p className={`${styles.servicePragaraph}`}>
                Seduahag perspiciati under omnised atused error.
              </p>
              <a href="" className={`${styles.serviceBtn}`}>
                Explore Now
              </a>
            </div>
            <div className={`col-md-3 ${styles.serviceCol} p-2`}>
              <div className="d-flex justify-content-between">
                <h6 className={`${styles.serviceHeading}`}>Cardiology</h6>
                <FontAwesomeIcon
                  icon={faTooth}
                  className={`${styles.serviceIcon}`}
                />
              </div>
              <p className={`${styles.servicePragaraph}`}>
                Seduahag perspiciati under omnised atused error.
              </p>
              <a href="" className={`${styles.serviceBtn}`}>
                Explore Now
              </a>
            </div>
            <div className={`col-md-3 ${styles.serviceCol} p-2`}>
              <div className="d-flex justify-content-between">
                <h6 className={`${styles.serviceHeading}`}>Cardiology</h6>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className={`${styles.serviceIcon}`}
                />
              </div>
              <p className={`${styles.servicePragaraph}`}>
                Seduahag perspiciati under omnised atused error.
              </p>
              <a href="" className={`${styles.serviceBtn}`}>
                Explore Now
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h6 className={`${styles.experience}`}>16+ Years Experiences </h6>
              <h1 className={`${styles.headingEx}`}>
                We Are Always ensure Best Medical Treatment For Your Health
              </h1>
              <p className={`${styles.paragaraphEx}`}>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it is a long established fact that a reader will
                be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look lik
              </p>
            </div>
            <div className="col-md-6 text-center">
              <Image src={frameImage} className="img-fluid"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
