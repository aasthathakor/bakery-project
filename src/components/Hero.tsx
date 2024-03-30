"use client";
//import { it } from 'node:test';
import React from 'react'
import Slider from 'react-slick'
import Slide from './slide';

const Hero = () => {
    var settings = {
        dots: true,
        Infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            Id: 0,
            img: "/shop.jpg",
            title: "Our Shop",
            mainTitle: "visit to our backery",
            price: "20",
        },

        {
            Id: 1,
            img: "/shop2.jpg",
            title: "try our product",
            mainTitle: "visit to our backery",
            price: "20",
        },
        {
            Id: 2,
            img: "/shop3.jpg",
            title: "try our product",
            mainTitle: "visit to our backery",
            price: "20",
        },
    ];

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                    key={item.Id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                    />
                ))}
            </Slider>

        </div>
    </div>
  );
};
export default Hero;

