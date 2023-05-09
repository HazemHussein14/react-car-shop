const NavLinks = ({ isSticky }) => {
  const colorEffect = isSticky
    ? "hover:text-[#741906]"
    : "lg:hover:bg-[#741906]";

  return (
    <>
      <ul className="hidden md:flex gap-4">
        <li>
          <a
            href="#home"
            className={`font-bold p-1 transition duration-300 rounded ${colorEffect}`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`font-bold p-1 transition duration-300 rounded ${colorEffect}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={`font-bold p-1 transition duration-300 rounded ${colorEffect}`}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#cars"
            className={`font-bold p-1 transition duration-300 rounded ${colorEffect}`}
          >
            Cars
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`font-bold p-1 transition duration-300 rounded ${colorEffect}`}
          >
            Contact us
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
