import React from "react";

const ServicesList = () => {
  return (
    <div className="container mt-20 text-center text-[#12273D] lg:grid lg:grid-cols-3 lg:gap-10 lg:mt-32">
      <div className="mb-10">
        <i className="fa-regular fa-gem mb-4 text-5xl"></i>
        <h4 className="text-2xl font-bold mb-4">Car Selling</h4>
        <p className="text-[1.125rem]">
          At YourCar, we make it easy to sell your car. Simply bring your
          vehicle in for an appraisal, and we'll handle the rest. We offer fair
          prices and a hassle-free selling process, so you can get your vehicle
          with minimal effort.
        </p>
      </div>
      <div className="mb-10">
        <i className="fa-solid fa-key mb-4 text-5xl"></i>
        <h4 className="text-2xl font-bold mb-4">Car Rental</h4>
        <p className="text-[1.125rem]">
          If you're in need of a luxury car rental, look no further than
          YourCar. Our fleet of high-end vehicles is regularly maintained and
          serviced to ensure that you have a safe and comfortable driving
          experience.
        </p>
      </div>
      <div>
        <i className="fa-regular fa-star mb-4 text-5xl"></i>
        <h4 className="text-2xl font-bold mb-4">Car Sales</h4>
        <p className="text-[1.125rem]">
          At YourCar, we offer a wide selection of luxury vehicles for sale.
          Whether you're in the market for a sleek sports car or a spacious SUV,
          we have the perfect vehicle to fit your needs.
        </p>
      </div>
    </div>
  );
};

export default ServicesList;
