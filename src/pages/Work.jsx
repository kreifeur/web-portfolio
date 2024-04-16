import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/whatsupclone.png";
import project6 from "../assets/authentik.png";
import project7 from "../assets/ecommerce.png";

const Work = () => {
  const projects = [
    {
      index: 7,
      titre: "Ecommerce store",
      desc:'it was full gestion project you can add clients , suppliers , products  using flask and react js',
      imag: project7,
      adress: "https://clothes-store-opal.vercel.app/",
    },
    {
      index: 6,
      titre: "Authentik",
      desc:'it was full gestion project you can add clients , suppliers , products  using flask and react js',
      imag: project6,
      adress: "https://authentik-delta.vercel.app/",
    },

    {
      index: 1,
      titre: "Gestion de stock",
      desc:'it was full gestion project you can add clients , suppliers , products  using flask and react js',
      imag: project2,
      adress: "https://kreifeur.github.io/Goujil-frontend/",
    },
    {
      index: 2,
      titre: "what's up clone",
      desc:'it was full gestion project you can add clients , suppliers , products  using flask and react js',
      imag: project5,
      adress: "https://whatsuo-clone.vercel.app/",
    },
    {
      index: 3,
      titre: "Baleghni",
      desc:'a diin project using multiple api and react js',
      imag: project1,
      adress: "https://kreifeur.github.io/baleghni/",
    },
   
    { index: 4, titre: "Dashboard bi", imag: project3 },
    { index: 5, titre: "Pizzeria menu ", imag: project4 },
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
            <div className="cursor-pointer [w-100%] bg-gradient-to-r from-white via-gray-200 to-indigo-100 rounded  flex flex-col  p-2 justify-between gap-1 ">
              <div className="font-bold text-lg">{e.titre}</div>
              <div>
                {e.desc}
              </div>
              <img
                className=" w-[100%] bg-cover bg-center "
                src={e.imag}
              ></img>
              <a className="  self-end" href={e.adress}>
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
