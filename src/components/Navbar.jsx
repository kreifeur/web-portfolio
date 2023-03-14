import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState("hidden");
  const openmenue = () => {
    open == "hidden"
      ? setOpen(
          "flex flex-col items-center justify-between absolute top-[7vh] right-[10px] w-[50vw] h-max p-8 rounded  bg-purple-200   shadow sm:hidden"
        )
      : setOpen("hidden");
  };
  return (
    <div className="fixed w-[100%] sm:w-[90%] p-10 top-0 bg-[rgba(0,0,0,0.7)]  sm:text-white h-[7vh] flex justify-between items-center ">
      <a href="#home" className="font-bold text-lg">
        KREIFEUR
      </a>
      <ul className={`sm:flex gap-10 ${open} text-black sm:text-white`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={openmenue} className="sm:hidden font-bold text-xl">
        {open == "hidden" ? <RxHamburgerMenu /> : <AiOutlineClose/>}
        
        
      </div>
    </div>
  );
};

export default Navbar;
