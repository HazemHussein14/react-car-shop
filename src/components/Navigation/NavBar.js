import NavLinks from "./NavLinks";
import SlideNav from "./SlideNav";
import { useState, useEffect } from "react";

function NavBar() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [sticky, setSticky] = useState("");

  const toggleSideNav = () => {
    setIsSideOpen((prevState) => !prevState);
  };

  const checkIsVisited = (val) => {
    if (val) {
      toggleSideNav();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 550 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  return (
    <header
      className={`px-6 bg-[#fdfdfd] ${
        sticky ? sticky : "absolute w-full lg:bg-transparent"
      }`}
    >
      <nav
        className={`flex text-[#12273D] ${
          sticky ? "lg:text-[#12273D]" : "lg:text-white"
        } items-center justify-between p-4`}
      >
        <a href="#home" className="text-3xl">
          <strong>Your</strong>Cart
        </a>
        <div className="flex gap-5">
          <NavLinks checkIsVisited={checkIsVisited} isSticky={sticky} />
          <button className="text-2xl">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="text-2xl lg:hidden" onClick={toggleSideNav}>
            {isSideOpen ? (
              <i className="fa-sharp fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>

        <SlideNav isSideOpen={isSideOpen} checkIsVisited={checkIsVisited} />
      </nav>
    </header>
  );
}
export default NavBar;
