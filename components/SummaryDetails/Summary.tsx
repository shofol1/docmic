import Image from "next/image";
import React from "react";
import styles from "../../styles/Summary.module.css";
import doctor1 from "../../images/doctor1.jpg";
export default function Summary() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4 text-center">
                <h3>262k+</h3>
                <p>Recovered Patients</p>
              </div>
              <div className="col-md-4 text-center">
                <h3> 96%</h3>
                <p>Satisfaction Rate</p>
              </div>
              <div className="col-md-4 text-center">
                <h3>86+</h3>
                <p>Expert Doctors</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <button className={`btn ${styles.btnInfo} text-white`}>
              Meet Our Specialist
            </button>
          </div>
          <div className="col-md-3">
            <div className={`${styles.addDoctor}`}>
              <p>Meet Our Doctors</p>
              <div className="row">
                <div className="col-md-3">
                  <Image
                    src={doctor1}
                    className={`rounded-circle ${styles.image}`}
                  />
                </div>
                <div className="col-md-3">
                  <Image
                    src={doctor1}
                    className={`rounded-circle ${styles.image}`}
                  />
                </div>
                <div className="col-md-3">
                  <Image
                    src={doctor1}
                    className={`rounded-circle ${styles.image}`}
                  />
                </div>
                <div className="col-md-3">
                  <Image
                    src={doctor1}
                    className={`rounded-circle ${styles.image}`}
                  />
                </div>
              </div>
              <div className={`${styles.gradient1}`}></div>
              <div className={`${styles.gradient2}`}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
