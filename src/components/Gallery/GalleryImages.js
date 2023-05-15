const images = [
  { path: "images/test1.webp" },
  { path: "images/test2.webp" },
  { path: "images/test3.webp" },
  { path: "images/test4.webp" },
  { path: "images/test5.webp" },
  { path: "images/test6.webp" },
  { path: "images/test7.webp" },
  { path: "images/test8.webp" },
  { path: "images/test9.webp" },
];

const Image = ({ src, alt }) => {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        className="h-[369px] w-full md:object-cover"
      />
    </figure>
  );
};

const GalleryImages = () => {
  return (
    <div className="grid lg:grid-cols-3">
      <div className="hidden lg:block">
        <div>
          <Image src={images[0].path} alt="car" />
        </div>
        <div>
          <Image src={images[1].path} alt="car" />
        </div>
        <div>
          <Image src={images[2].path} alt="car" />
        </div>
      </div>
      <div>
        <div>
          <Image src={images[3].path} alt="car" />
        </div>
        <div className="relative">
          <Image src={images[4].path} alt="car" />
          <div className="absolute z-10 text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h3 className="mb-4 text-2xl font-bold">Tesla Model 3</h3>
            <p className="mb-6">
              Disruptive, avant-garde, futuristic, innovative.
            </p>
            <a
              href="#contact"
              className="block w-fit border-solid border-white border-2 px-5 py-1 mx-auto rounded hover:scale-[1.1] transition-transform duration-300"
            >
              Contact
            </a>
          </div>
          <div className="after:absolute after:content-[''] after:bg-[#00000089] after:w-full after:h-full after:top-0 after:left-0 text-center" />
        </div>
        <div>
          <Image src={images[5].path} alt="car" />
        </div>
      </div>
      <div className="hidden lg:block">
        <div>
          <Image src={images[6].path} alt="car" />
        </div>
        <div>
          <Image src={images[7].path} alt="car" />
        </div>
        <div>
          <Image src={images[8].path} alt="car" />
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
