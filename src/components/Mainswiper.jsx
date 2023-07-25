//Main.jsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../Mainswiper.css';
import { Autoplay, Pagination, Navigation } from "swiper";
import main1 from '../asset/Image/main_value2.jpeg';
import main2 from '../asset/Image/main_value1.jpeg';
import main3 from '../asset/Image/main3.jpeg';
import main4 from '../asset/Image/main_value3.jpeg';


const Mainswiper = () => {


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{position : "relative" , top : "0px" , height : "800px" , marginBottom : "50px"}}
      >
    <SwiperSlide className='w-100-per h-800'><img src={main1}/></SwiperSlide>
    <SwiperSlide className='w-100-per h-800'><img src={main2}/></SwiperSlide>
    <SwiperSlide className='w-100-per h-800'><img src={main3}/></SwiperSlide>
    <SwiperSlide className='w-100-per h-800'><img src={main4}/></SwiperSlide>

      </Swiper>
    </>
  );

}

export default Mainswiper;


