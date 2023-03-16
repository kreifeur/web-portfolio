import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
const Work = () => {
  const projects = [
    { index: 1, titre: "baleghni", imag: project1 },
    { index: 2, titre: "gestion de stock", imag: project2 },
    { index: 3, titre: "dashboard bi", imag: project3 },
    { index: 4, titre: "pizza", imag: project4},
  ];


  
  return (
    <div id="work" className=" w-[100%] min-h-[100vh] pt-[20vh] ">
      <div className=" grid p-8 grid-cols-1   lg:grid-cols-2 gap-8">
        {projects.map((e)=> {return <div className="cursor-pointer [w-100%] bg-purple-300 rounded sm:h-[60vh] h-[30vh] flex items-center p-2 justify-center">
            <div className='h-[80%] w-[100%] bg-cover bg-center ' style={{ backgroundImage: `url(${e.imag})` }} ></div>
            </div>})}
      </div>
    </div>
  );
};

export default Work;
