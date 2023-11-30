'use client'
import { testimonial } from '@/app/types/constants'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
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
    }
    return (
      <section className="bg-[#FFF] py-12">
        <div className="container mx-auto px-1">
          <h2 className="section-header pb-4">TESTIMONIOS</h2>
          <Slider {...settings}>
            {testimonial.map((testimony, index) => {
              return (
                <div
                  className="testimony-card flex flex-col border rounded-md mx-1 select-none p-6"
                  key={index}
                >
                  <Image
                    src={testimony.image}
                    width={80}
                    height={80}
                    alt={testimony.name}
                    quality={100}
                    loading="lazy"
                    className="rounded-lg"
                  />
                  <h3 className="py-2">
                    <b>{testimony.name}</b>
                  </h3>
                  <p className="text-secondary pb-2">{testimony.job}</p>
                  <div className="flex text-yellow-400 pb-2">
                    {[...Array(testimony.rate)].map((e, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-secondary text-justify text-md">
                    {testimony.comment}
                  </p>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    )
  }
}

export default Testimonials
