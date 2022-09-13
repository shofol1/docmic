import Image from "next/image";
import React from "react";
import styles from "../../styles/Summary.module.css";
import doctor1 from "../../images/doctor1.jpg";
export default function Summary() {
  return (
    <>
      <div className={`container ${styles.wrapper}`}>
        <div className={`row ${styles.abs}`}>
          <div className={`col-md-6 ${styles.counterCountWrapper}`}>
            <div className={`row ${styles.couterCount}`}>
              <div className="col-md-4 text-center">
                <h3 className={`${styles.headingCount}`}>262k+</h3>
                <p className={`${styles.paraCount}`}>Recovered Patients</p>
              </div>
              <div className="col-md-4 text-center">
                <h3 className={`${styles.headingCount}`}> 96%</h3>
                <p className={`${styles.paraCount}`}>Satisfaction Rate</p>
              </div>
              <div className="col-md-4 text-center">
                <h3 className={`${styles.headingCount}`}>86+</h3>
                <p className={`${styles.paraCount}`}>Expert Doctors</p>
              </div>
            </div>
          </div>
          <div className={`col-md-3 ${styles.btnAbs}`}>
            <button className={`btn ${styles.btnInfo} text-white`}>
              Meet Our Specialist
            </button>
          </div>
          <div className={`col-md-3 ${styles.addDoctorWrapper}`}>
            <div className={`${styles.addDoctor}  p-2`}>
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
