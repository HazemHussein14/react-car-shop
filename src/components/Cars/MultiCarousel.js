import { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./Dots";

import { fetchData } from "../../utils/fetch-data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MultiCarousel = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const getCarsData = async () => {
      const data = await fetchData("data.json");
      setCarsData(data.cars);
    };
    getCarsData();
  }, []);

  return (
    <div className="container mt-20">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        customDot={<CustomDot/>}
        renderDotsOutside
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
      >
        {carsData.map((car) => (
          <div key={car.name} className="flex flex-col h-[600px] mb-5 shadow-lg mr-5 bg-white">
            <img src={car.image} alt={car.name} className="w-[311px] m-auto"/>
            <div className="p-3 md:p-6">
              <article className="mb-8 text-center">
              <h3 className="text-2xl text-[#741906] uppercase font-bold ">{car.class}</h3>
              <p className="text-[16px]">{car.name}</p>
              </article>
              <p className="mb-8">{car.description}</p>
              <div className="flex justify-between itmes-center">
                <div>
                  <div>
                    <p className="text-[18px] text-[#741906]">
                    <i className="fa-solid fa-user-group text-[#12273D] mr-4"></i>
                    {car.seats} Seats
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] text-[#741906]">
                    <i className="fa-solid fa-suitcase text-[#12273D] mr-4"></i>
                    {car.luggage} Luggage
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-2 py-1 text-white text-center bg-[#741906] rounded-l-md"><i className="fa-solid fa-minus text-[12px]"></i></button>
                  0
                  <button className="px-2 py-1 text-white text-center bg-[#741906] rounded-r-md"><i className="fa-solid fa-plus text-[12px]"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
