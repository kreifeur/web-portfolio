import {
  BsFillArrowDownSquareFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
const Home = () => {
  return (
    <div id="home" className=" w-[100%] pt-[25vh]">
      <div className=" flex h-[70vh] flex-col lg:flex-row">
        <div className="flex-[2] p-3 flex flex-col gap-4">
          <div className="text-2xl">
            We specialize in crafting exceptional digital <br />
            experiences to help our clients achieve their <br />
            business goals.
          </div>
          <div className="text-5xl md:text-8xl">
            Full stack Web developement
          </div>
        </div>

        <div className="flex-1 h-[70vh] w-[100%] flex flex-col justify-between p-12 md:items-end items-center">
          <div className="hidden sm:flex"></div>
          <ul className="flex flex-col items-center text-md gap-3">
            <div className="flex gap-10 text-4xl sm:text-3xl ">
              <a href="https://github.com/kreifeur">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-kreifeur-948682239/">
                <BsLinkedin />
              </a>
            </div>
            <li className="font-bold">Kreifeur669@gmail.com </li>
            <li className="text-gray-600 font-bold ">Scroll to explore</li>
            <a href="#work" className="text-2xl animate-bounce text-gray-600">
              <BsFillArrowDownSquareFill />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
