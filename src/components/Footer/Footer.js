const Footer = () => {
  return (
    <footer className="bg-white shadow-[0_-3px_2px_rgba(0,0,0,0.03)] p-10">
      <div className="container text-center lg:grid lg:grid-cols-3 lg:gap-5">
        <article className="mb-6 lg:text-start lg:mb-0">
          <h3 className="text-3xl text-[#741906] mb-3">
            <b>Your</b>Car
          </h3>
          <p className="mb-5">
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </article>

        <div className="mb-6 lg:mb-0">
          <h3 className="text-3xl text-[#741906] font-bold mb-3">
            News Letter
          </h3>
          <p className="mb-5">
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <form className="lg:flex lg:items-center lg:gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-solid border-[#741906] outline-none py-2 px-4 mb-5 lg:mb-0"
            />
            <button
              type="button"
              className="block mx-auto bg-[#741906] text-white py-2 px-4 cursor-pointer font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mb-10 lg:mb-0">
          <h3 className="text-3xl text-[#741906] font-bold mb-3">Contact</h3>
          <ul className="flex flex-col items-center gap-3 mb-8">
            <li className="flex items-center justify-center gap-2">
              <i className="fa-solid fa-location-dot"></i>
              <address className="w-1/2 not-italic">
                2038 2nd Avenue, Las Vegas, United States
              </address>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-phone"></i>
              <div>
                <a href="tel:01444773421423" className="block">
                  01444773421423
                </a>
                <a href="tel:01444773421423">01444773421423</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@YourCar.com">info@YourCar.com</a>
            </li>
          </ul>
        </div>
          <ul className="flex items-center justify-center gap-3 mb-4 text-3xl lg:col-span-3">
            <li>
              <a href="https://www.facebook.com">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
      </div>
      <div className="container pt-3 border-[#741906] border-t-2 text-center">
        <p className="text-[12px]">
          &#169; Copyright - <b>YourCar</b> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
