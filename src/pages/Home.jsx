import {
  BsFillArrowDownSquareFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
const Home = () => {
  return (
    <div id="home" className=" w-[100%] py-[15vh]  h-[100vh] flex flex-col justify-center items-center ">
      <div className=" flex flex-col w-full gap-10 ">

        <div className=" flex flex-col gap-4 w-full">
        <div className="text-5xl md:text-7xl text-center font-black bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Full stack Web developement
          </div>
          <div className="text-2xl text-center w-full ">
            We specialize in crafting exceptional digital 
            experiences to help our clients achieve their 
            business goals.
          </div>
         
        </div>

        <div className="  w-[100%] flex flex-col justify-between  md:items-center items-center">
          <ul className="flex flex-col items-center text-md gap-3 ">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
