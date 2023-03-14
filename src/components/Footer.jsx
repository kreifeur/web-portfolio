const Footer = () => {
  return (
    <div className=" w-[100%] min-h-[27vh] p-2 bg-gray-200 absolute left-0 flex flex-col items-center justify-between  text-black">
      <div className="text-2xl">Kreifeur Ibrahim</div>
      <div className="flex justify-around w-[100%] sm:flex-row flex-col">
        <ul className="flex-1 text-center flex flex-col sm:gap-1 gap-2">
          <li className="font-bold">Social media accounts</li>
          <li>Github</li>
          <li>linkedin</li>
          <li>Email</li>
        </ul>
        <div className="border-l-2 border-l-black"></div>
        <ul className="flex-1 items-center ml-2 flex flex-col sm:flex-row sm:gap-8  gap-2">
          <li className="font-bold">Website links </li>
          <li>Home</li>
          <li>Work</li>
          <li>Services</li>
          <li>Technologies</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>Design by Kreifeur ibrahim | 2023 @ portfolio</div>
    </div>
  );
};

export default Footer;
