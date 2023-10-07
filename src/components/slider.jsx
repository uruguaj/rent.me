import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Bestseller() {
  const [isMobile, setIsMobile] = useState(false);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
  });
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (isMobile) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        arrows: false,
      });
    } else {
      setSettings({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: true,
      });
    }
  }, [isMobile]);
  const sellers = [
    {
      title: "BMW M4",
      img: "./mbwm4.jpg",
      info: "The BMW M4 is a high-performance sports car that combines power and luxury. With its turbocharged engine and precision engineering, it offers an exhilarating driving experience. Whether you're cruising on the highway or tearing up the racetrack, the BMW M4 delivers unmatched performance and style. Rent it today and experience the thrill of driving a true sports car.",
      year: "2020",
      price: "From $699 a day!",
    },
    {
      title: "Mercedes E63 Amg",
      img: "./mercedescar.jpg",
      info: "The Mercedes E63 AMG is a masterpiece of German engineering. Its powerful V8 engine and advanced technology make it a true performance sedan. Whether you're a speed enthusiast or looking for a comfortable and luxurious ride, the E63 AMG offers the best of both worlds. Rent this beauty today and experience the perfect blend of power and elegance.",
      year: "2020",
      price: "From $499 a day!",
    },
    {
      title: "Lamborghini Huracan",
      img: "./lambo.jpg",
      info: "The Lamborghini Huracan is an exotic supercar that needs no introduction. Its iconic design and thunderous V10 engine make it a dream car for many. Driving a Huracan is not just a journey; it's an adventure. From its lightning-fast acceleration to its roaring exhaust note, the Huracan is a true masterpiece of Italian craftsmanship. Rent it today and experience the thrill of a lifetime.",
      year: "2020",
      price: "From $1,090 a day!",
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {sellers.map((brand) => (
          <div className=" text-black p-4" key={brand.title}>
            <img
              loading="lazy"
              className="rounded-t-lg aspect-[16/10]"
              src={brand.img}
              alt={brand.title}
            />
            <div className="p-3 bg-white rounded-b">
              <div className="text-center">
                <span className="block w-sans font-bold text-[1.3rem] mb-3">
                  {brand.title}
                </span>
              </div>
              <span className="block heebo text-[1.1rem]">{brand.info}</span>
              <span className="block font-rubik">Year: {brand.year}</span>
              <span className="font-rubik">Price : {brand.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
