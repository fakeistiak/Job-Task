const Banner = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

  const bannerStyle = {
    backgroundImage: `url('${backgroundImage}')`,
  };
  return (
    <div>
      <div className="w-full bg-center bg-cover h-[38rem]" style={bannerStyle}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/20">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Welcome to our <span className="text-black">Saas</span> Project
            </h1>
            <button className="w-full px-5 py-2 mt-4 text-md font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto bg-black">
              Let's Exploree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
