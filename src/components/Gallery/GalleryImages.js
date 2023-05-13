const images = [
  { path: "images/test1.jpg" },
  { path: "images/test2.jpg" },
  { path: "images/test3.jpg" },
  { path: "images/test4.jpg" },
  { path: "images/test5.jpg" },
  { path: "images/test6.jpg" },
  { path: "images/test7.jpg" },
  { path: "images/test8.jpg" },
  { path: "images/test9.jpg" },
];

const GalleryImages = () => {
  return (
    <div className="grid lg:grid-cols-3">
      {/* {images.map((image, idx) => (
        <div
          key={idx}
          className={`${
            idx === 4 &&
            "relative after:absolute after:content-[''] after:bg-[#00000089] after:w-full after:h-full after:top-0 after:left-0 text-center"
          }${idx !== 4 && idx !== 5 && idx !== 6 ? "hidden": ''} md:block `}
        >
          <figure>
            <img src={image.path} alt="car" className="h-[369px] w-full" />
          </figure>
          {idx === 4 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
              <h3 className="text-2xl font-bold mb-4">Tesla Model 3</h3>
              <p className="mb-6">
                Disruptive, avant-garde, futuristic, innovative.
              </p>
              <button className="border-solid border-white border-2 px-5 py-1 rounded hover:scale-[1.1] transition-transform duration-300">
                Contact
              </button>
            </div>
          )}
        </div>
      ))} */}
      <div className="hidden lg:block">
        <div>
          <figure>
            <img src={images[0].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
        <div>
          <figure className="mx-w-[450px]">
            <img src={images[1].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
        <div>
          <figure className="mx-w-[450px]">
            <img src={images[2].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
      </div>
      <div>
        <div>
          <figure>
            <img src={images[3].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
        <div className="relative after:absolute after:content-[''] after:bg-[#00000089] after:w-full after:h-full after:top-0 after:left-0 text-center">
          <figure>
            <img src={images[4].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
            <h3 className="text-2xl font-bold mb-4">Tesla Model 3</h3>
            <p className="mb-6">
              Disruptive, avant-garde, futuristic, innovative.
            </p>
            <button className="border-solid border-white border-2 px-5 py-1 rounded hover:scale-[1.1] transition-transform duration-300">
              Contact
            </button>
          </div>
        </div>
        <div>
          <figure>
            <img src={images[5].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
      </div>
      <div className="hidden lg:block">
        <div>
          <figure>
            <img src={images[6].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={images[7].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={images[8].path} alt="car" className="h-[369px]   w-full md:object-cover" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
