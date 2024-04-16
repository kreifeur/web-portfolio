const Footer = () => {
  return (
    <div className=" w-[100%] min-h-[27vh] p-2 bg-gradient-to-r from-white via-gray-200 to-indigo-100 absolute left-0 flex flex-col items-center justify-between  text-black">
      <div className="flex justify-around w-[100%] sm:flex-row flex-col">
        <ul className="flex-1 text-center flex flex-col sm:gap-1 gap-2">
          <li className="font-bold">Social media accounts</li>
          <a href="https://github.com/kreifeur">Github</a>
          <a href="https://www.linkedin.com/in/ibrahim-kreifeur-948682239/">linkedin</a>
        </ul>
        <div className="border-l-2 border-l-black"></div>
        <ul className="flex-1 items-center ml-2 flex flex-col sm:flex-row sm:gap-8  gap-2">
          <li className="font-bold">Website links </li>
          <a href="#home"> Home</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </ul>
      </div>
      <div className="mt-6">Design by Kreifeur ibrahim | 2023 @ portfolio</div>
    </div>
  );
};

export default Footer;
