const HeroBanner = () => {
  return (
    <section id="home" className="bg-hero-image bg-cover bg-no-repeat bg-center h-screen">
      <div className="pt-40 text-center md:container md:pt-56 md:ml-auto md:text-right">
        <h1 className="text-3xl text-white font-bold mb-20 md:text-6xl md:mb-8 lg:w-1/2 lg:ml-auto">
          Find the perfect car for you at YourCar.
        </h1>
        <p className="font-[Lora] text-white font-bold p-6 bg-[#0E0C0B75] mb-24 md:text-2xl md:mb-8 md:w-1/2 md:ml-auto md:bg-transparent">
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
        <a
          href="#cars"
          className="font-['Lora'] font-bold text-2xl px-6 py-2 bg-transparent border-2 border-solid border-white rounded text-white"
        >
          Discover
          <i className="fa-sharp fa-solid fa-arrow-up-right-from-square ml-3 text-lg"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;


