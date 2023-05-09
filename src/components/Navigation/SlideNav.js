import { useState } from "react";

const SlideNav = ({ isSideOpen, checkIsVisited }) => {
  const [isVisited, setisVisited] = useState(false);

  const visitLinkHandler = () => {
    setisVisited(true);
    checkIsVisited(isVisited);
  };

  return (
    <nav
      className={`absolute top-[68px] right-0 h-screen w-64 bg-[#12273deb] transition-all duration-500 ease-in flex flex-col ${
        isSideOpen
          ? "pointer-events-auto visible translate-x-0 opacity-100"
          : "pointer-events-none invisible translate-x-[100%] opacity-0"
      }`}
    >
      <ul className="text-white flex-col font-bold mt-20">
        <li className="p-4 transition duration-300 hover:bg-[#741906]">
          <a href="#home" className="block" onClick={visitLinkHandler}>
            Home
          </a>
        </li>
        <li className="p-4 hover:bg-[#741906]">
          <a href="#about" className="block" onClick={visitLinkHandler}>
            About
          </a>
        </li>
        <li className="p-4 transition duration-300 hover:bg-[#741906]">
          <a href="#services" className="block" onClick={visitLinkHandler}>
            Services
          </a>
        </li>
        <li className="p-4 transition duration-300 hover:bg-[#741906]">
          <a href="#fleet" className="block" onClick={visitLinkHandler}>
            Fleet
          </a>
        </li>
        <li className="p-4 transition duration-300 hover:bg-[#741906]">
          <a href="#contact" onClick={visitLinkHandler}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SlideNav;

// width: 260 bg: #12273D link-bg: #741906 opacity: 0; pointer-events: none; visibility: hidden;
