import Image from "next/image";
import React from "react";
import heroImage from "../../images/pose_2.png";
import styles from "../../styles/Hero.module.css";
export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className={styles.heading}>
              Your <span style={{ color: "#2D89FF" }}>Health</span> Is Our Top
              <span style={{ color: "#642DFF" }}> Priority</span>
            </h1>
            <p className={styles.paragraph}>
              There are many variations of passages of lpsum <br /> available,
              but the majority hae suffered.
            </p>
            <button className={`btn ${styles.btnInfo} text-white`}>
              Meet Our Specialist
            </button>
          </div>
          <div className="col-md-6">
            <Image
              src={heroImage}
              alt="Hero section image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
