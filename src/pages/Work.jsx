import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/whatsupclone.jpg";
import project6 from "../assets/authentik.jpg";
import project7 from "../assets/ecommerce.jpg";
import project8 from "../assets/jeep.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Work = () => {
  const projects = [
    {
      index: 7,
      titre: "Ecommerce store",
      desc: "Utilized React.js , Django and tailwindcss to create a responsive shopping site with advanced product filtering , significantly enhancing user engagement and supporting sustainable consumer practices.",
      imag: project7,
      adress: "https://clothes-store-opal.vercel.app/",
    },
    {
      index: 6,
      titre: "Authentik",
      desc: "Crafted with Next js and tailwindcss to deliver a compelling and interactive landing page that boosts user engagement and effectively communicates the platform's core offerings.",
      imag: project6,
      adress: "https://authentik-delta.vercel.app/",
    },

    {
      index: 1,
      titre: "Management system",
      desc: "Built with React for the frontend and Flask for the backend, enabling seamless management of clients, products, and suppliers, ensuring efficient stock tracking and procurement processes.",
      imag: project2,
      adress: "https://kreifeur.github.io/Goujil-frontend/",
    },
    {
      index: 8,
      titre: "JEEP landing page",
      desc: "Leveraged Next.js and Tailwind CSS to build a visually stunning and responsive landing page that highlights Jeep’s rugged capabilities and adventure-ready features, enhancing user interaction and brand appeal.",
      imag: project8,
      adress: "https://kreifeur.github.io/Landing-page/",
    },
    {
      index: 2,
      titre: "what's up clone",
      desc: "Implemented with Tailwind CSS to replicate the UI of What's Up, providing a sleek and responsive user interface for seamless communication and content sharing.",
      imag: project5,
      adress: "https://whatsuo-clone.vercel.app/",
    },
    {
      index: 3,
      titre: "Baleghni",
      desc: "Developed with React.js, harnessing the power of multiple APIs for seamless integration and data aggregation, empowering users with a centralized hub for diverse information sources.",
      imag: project1,
      adress: "https://kreifeur.github.io/baleghni/",
    },

    
    { index: 5, titre: "Interactive Menu App ", imag: project4  ,desc:"Crafted with React.js to create a dynamic and user-friendly pizza menu, offering a seamless browsing experience and easy customization options for customers."},
    { index: 4, titre: "Dashboard bi", imag: project3 },
  ];

  return (
    <div
      id="work"
      className=" w-[100%] min-h-[100vh] pt-[20vh] flex flex-col items-center  gap-8 px-5 sm:px-0 "
    >
      <div className="flex items-center justify-between w-full   sm:flex-row flex-col gap-4">
        <div className="sm:w-[30%] bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold w-full">
          Our product we ve created before
        </div>
        {/*         <div className="text-gray-500 w-full sm:w-[50%]">
          we have many interesting services with profesional team , that will
          help your work to be better
        </div> */}
      </div>
      <div className=" text-black grid grid-cols-1   lg:grid-cols-2 gap-8">
        {projects.map((e) => {
          return (
            <div
              key={e.index}
              className="cursor-pointer [w-100%] bg-gradient-to-r from-white via-gray-200 to-indigo-100 rounded  flex flex-col  p-4 justify-between gap-1 "
            >
              <div className="font-bold text-lg">{e.titre}</div>
              <div>{e.desc}</div>
              <img className=" w-[100%] bg-cover bg-center " src={e.imag}></img>
              <div className="self-end flex gap-8">
                <a className="flex items-center gap-2  " href={e.adress}>
                  <FaLink />
                  Live Demo
                </a>
                <a className="flex items-center gap-2" href="">
                  <FaGithub /> Source code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
