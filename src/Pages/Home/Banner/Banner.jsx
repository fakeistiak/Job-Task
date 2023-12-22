import { Link } from "react-router-dom";

const Banner = () => {
  const backgroundImage =
    "https://i.ibb.co/5v9F8fj/406804122-885399963223314-4059098543875446777-n.jpg";

  const bannerStyle = {
    backgroundImage: `url('${backgroundImage}')`,
  };
  return (
    <div>
      <div className="w-full bg-center bg-cover h-[38rem]" style={bannerStyle}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white lg:text-5xl">
              Welcome to <span className="text-black">SCC </span>
              Technovision Inc
            </h1>
            <p className="text-white lg:px-96 py-4">
              Task Manager is a vital utility in operating systems, enabling
              users to monitor and control processes. It provides insights into
              resource usage, facilitates troubleshooting, and enhances system
              performance and efficiency.
            </p>
            <Link to="/dashboard" className="w-full px-5 py-2 mt-4 text-md font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto bg-black">
              Let's Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
