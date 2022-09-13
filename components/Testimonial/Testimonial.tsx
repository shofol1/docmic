import React from "react";
import styles from "../../styles/Testimonial.module.css";
import Slider from "react-slick";
import slider1 from "../../images/slider1.png";
import Image from "next/image";

export default function Testimonial() {
  const settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={`container ${styles.wrapper}`}>
        <h3 className={styles.heading}>Our Services</h3>
        <h2 className={styles.subheading}>Services For Your Health</h2>
        <div className="row bg-info">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Slider {...settings}>
              <div>
                <div className="row">
                  <div className="col-md-8 p-3">
                    <h5>David Jeams</h5>
                    <h6>Pratient</h6>
                    <p>
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it is a long
                      established fact that a reader will be distracted by the
                      readable content{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <Image src={slider1} />
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-8 p-3">
                    <h5>David Jeams</h5>
                    <h6>Pratient</h6>
                    <p>
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it is a long
                      established fact that a reader will be distracted by the
                      readable content{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <Image src={slider1} />
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-8 p-3">
                    <h5>David Jeams</h5>
                    <h6>Pratient</h6>
                    <p>
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it is a long
                      established fact that a reader will be distracted by the
                      readable content{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <Image src={slider1} />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}
