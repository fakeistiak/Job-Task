import { TbFocus2 } from "react-icons/tb";
import servicesData from "../../../../public/services.json";

const Services = () => {
  return (
    <div>
      <h1 className="text-5xl font-serif font-bold text-center  py-12">
        Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center p-12 gap-10 text-white ">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full lg:max-w-sm overflow-hidden rounded-xl shadow-lg shadow-black m-4 bg-black"
          >
            <img
              className="object-cover object-center w-full h-56"
              src={service.image}
              alt="service"
            />

            <div className="flex items-center px-6 py-3 ">
              <TbFocus2 />
              <h1 className="mx-3 text-lg font-semibold">{service.role}</h1>
            </div>

            <div className="flex items-center px-6 py-3">
              <h1 className="text-xl font-semibold ">{service.benefits}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
