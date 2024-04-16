const Services = () => {
  const services = [
    { title: "Front-end web developement " },
    { title: "Back-end web developement " },
    { title: "Ui/Ux design" },
  ];

  return (
    <div id="services" className=" w-[100%] pt-[20vh] flex flex-col gap-8 px-5 sm:px-0">
      <div className="flex items-center justify-between w-full   sm:flex-row flex-col gap-4">
        <div className="sm:w-[30%] bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold w-full">
          Our product we ve created before
        </div>
        <div className="text-gray-500 w-full sm:w-[50%]">
          we have many interesting services with profesional team , that will
          help your work to be better
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 gap-8">
        {services.map((e) => {
          return (
            <div className="w-[100%] h-[30vh] flex flex-col items-center justify-center bg-gradient-to-r from-white via-gray-500 to-indigo-400 p-10 rounded text-black">
              <div className="text-lg font-bold">{e.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
