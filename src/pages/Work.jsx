import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";
const Work = () => {
  const projects = [
    {
      index: 1,
      titre: "Baleghni",
      imag: project1,
      adress: "https://kreifeur.github.io/baleghni/",
    },
    {
      index: 2,
      titre: "Gestion de stock",
      imag: project2,
      adress: "https://kreifeur.github.io/Goujil-frontend/",
    },
    { index: 3, titre: "Dashboard bi", imag: project3 },
    { index: 4, titre: "Pizzeria menu ", imag: project4 },
  ];

  return (
    <div id="work" className=" w-[100%] min-h-[100vh] pt-[20vh] flex flex-col items-center  gap-8 px-5 sm:px-0 ">
      <div className="flex items-center justify-between w-full   sm:flex-row flex-col gap-4">
          <div className="sm:w-[30%] bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold w-full">
            Our product we ve created before
          </div>
          <div className="text-gray-500 w-full sm:w-[50%]">
            we have many interesting services with profesional team , that will
            help your work to be better
          </div>
        </div>
      <div className=" text-black grid grid-cols-1   lg:grid-cols-2 gap-8">
        {projects.map((e) => {
          return (
            <div className="cursor-pointer [w-100%] bg-gradient-to-r from-white via-gray-500 to-indigo-400 rounded sm:h-[60vh] h-[30vh] flex flex-col  p-2 justify-between ">
              <div className="font-bold">{e.titre}</div>
              <img
                className="h-[80%] w-[100%] bg-cover bg-center "
                src={e.imag}
              ></img>
              <a className="h-[10%]  self-end" href={e.adress}>
                See more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
