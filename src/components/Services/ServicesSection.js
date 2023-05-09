import SectionTitle from "../SectionTitle";
import ServicesList from "./ServicesList";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="section-spacing bg-services-image bg-cover bg-no-repeat bg-center relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-[#ccc] after:opacity-80 after:-z-1"
    >
      <div className="container relative z-10">
        <SectionTitle title={"Services"} titleColor={"text-[#12273D]"} />
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesSection;
