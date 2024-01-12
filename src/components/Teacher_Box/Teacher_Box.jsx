import React, { useRef } from "react";
import Slider from "react-slick";
import image from "../../assets/234.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TeacherBox.module.css"
const TeacherBox = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        <div style= {styles.container}>
          <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        </Slider>
        <Slider ref={sliderRef} {...settings2}>
        <div style= {styles.container}>
          <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        </Slider>
        <Slider ref={sliderRef} {...settings3}>
        <div style= {styles.container}>
          <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        <div>
        <img src={image}/>
        </div>
        </Slider>
        </div>
  );
}


export default TeacherBox;