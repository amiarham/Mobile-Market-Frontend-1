/** @format */

import React from "react";
import "./HomeSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { EffectFade, Navigation, Autoplay } from "swiper";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        effect='fade'
        navigation={true}
        loop={true}
        speed={900}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay, EffectFade]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='banner'>
            <img
              className='bannerImg'
              src='https://res.cloudinary.com/dg6b5wkgh/image/upload/v1690406450/m1e0yxh4sge2gw5r4tnk.png'
              alt='banner3'
            />
            <section className='offer leftSideOffer'>
              <span style={{ color: "white" }}>SUMMER 30</span>
              <h1 style={{ color: "white" }}>
                NEW HOT <br />
                EVERYTHING
              </h1>
              <p style={{ color: "white" }}>
                CHECK OUT SUMMER <br /> COLLECTION FIRST COME TO GET <br /> THE
                BEST!
              </p>
              <div>
                <Link to='./blog'>
                  <button className='readMore'>READ MORE</button>
                </Link>
                <Link to='./shop'>
                  <button style={{ color: "white" }} className='showMore'>
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner'>
            <img
              className='bannerImg'
              src='https://res.cloudinary.com/dg6b5wkgh/image/upload/v1690406447/vy77utyt95oakitzyvem.png'
              alt='banner2'
            />
            <section className='offer rightSideOffer'>
              <span>SPRING SPECIAL</span>
              <h1>
                BECAUSE IMAGE
                <br />
                IS EVERYTHING
              </h1>
              <p>
                CHECK OUT SUMMER <br /> COLLECTION FIRST COME TO GET <br /> THE
                BEST!
              </p>
              <div>
                <Link to='./blog'>
                  <button className='readMore'>READ MORE</button>
                </Link>
                <Link to='./shop'>
                  <button className='showMore'>SHOP NOW</button>
                </Link>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner'>
            <img
              className='bannerImg'
              src='https://res.cloudinary.com/dg6b5wkgh/image/upload/v1690406429/jdviwakbzzzc4y1cl7qd.png'
              alt='banner1'
            />
            <section className='offer leftSideOffer'>
              <span style={{ color: "#d23315" }}>REEBOK SPECIAL</span>
              <h1>
                IMPOSSIBLE IS
                <br />
                NOTHING
              </h1>
              <p>
                CHECK OUT SUMMER <br /> COLLECTION FIRST COME TO GET <br /> THE
                BEST!
              </p>
              <div>
                <Link to='./blog'>
                  <button
                    className='readMore'
                    style={{ backgroundColor: "#d23315" }}>
                    READ MORE
                  </button>
                </Link>
                <Link to='./shop'>
                  <button className='showMore'>SHOP NOW</button>
                </Link>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner'>
            <img
              className='bannerImg'
              src='https://res.cloudinary.com/dg6b5wkgh/image/upload/v1690406442/zefiaozikeffpi3wwolo.png'
              alt='banner4'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
