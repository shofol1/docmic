import Image from "next/image";
import React from "react";
import frameImage from "../../images/Frame22.png";
import group1 from "../../images/Group21.png";
import group2 from "../../images/Group22.png";
import group3 from "../../images/Group23.png";
import group4 from "../../images/Group24.png";
import styles from "../../styles/Features.module.css";
export default function Features() {
  return (
    <>
      <div className="container">
        <div className={`row mt-5 `}>
          <div className="col-md-6 text-center">
            <Image src={frameImage} className={`${styles.imgFluid}`}></Image>
          </div>
          <div className={`${styles.wrapper} col-md-6`}>
            <h6 className={`${styles.experience}`}>Our Hospital Feature</h6>
            <h1 className={`${styles.headingEx}`}>
              Make An Appointment Easy And Fast Services
            </h1>
            <div className={`row   ${styles.colCardContainer} gap-3`}>
              <div className={`col-md-6 ${styles.featureCol}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className={`${styles.featureHeading}`}>
                    24 Hours Doctor Support
                  </h6>
                  <Image
                    src={group1}
                    className={`img-fluid ${styles.featureImage}`}
                  />
                </div>
                <p className={`${styles.featurePragaraph}`}>
                  Seduahag perspiciati under omnised atused error.
                </p>
              </div>
              <div className={`col-md-6 ${styles.featureCol}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className={`${styles.featureHeading}`}>
                    Exclusive Supports
                  </h6>
                  <Image
                    src={group2}
                    className={`img-fluid ${styles.featureImage}`}
                  />
                </div>
                <p className={`${styles.featurePragaraph}`}>
                  Seduahag perspiciati under omnised atused error.
                </p>
              </div>
            </div>
            <div className={`row   ${styles.colCardContainer} gap-3 mt-4`}>
              <div className={`col-md-6 ${styles.featureCol}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className={`${styles.featureHeading}`}>
                    Friendly Environment
                  </h6>
                  <Image
                    src={group3}
                    className={`img-fluid ${styles.featureImage}`}
                  />
                </div>
                <p className={`${styles.featurePragaraph}`}>
                  Seduahag perspiciati under omnised atused error.
                </p>
              </div>
              <div className={`col-md-6 ${styles.featureCol}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className={`${styles.featureHeading}`}>
                    Exclusive Supports
                  </h6>
                  <Image
                    src={group4}
                    className={`img-fluid ${styles.featureImage}`}
                  />
                </div>
                <p className={`${styles.featurePragaraph}`}>
                  Seduahag perspiciati under omnised atused error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
