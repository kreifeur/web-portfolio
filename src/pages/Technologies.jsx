import {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  python,
  flask,
  django,
  firebase,
  excel,
  tableau,
  power,
  talend,
  oracle,
  mysql,
} from "../assets/index";
const Technologies = () => {
  const tech = [
    { title: "html", icon: html },
    { title: "Css", icon: css },
    { title: "Java script", icon: javascript },
    { title: "React js", icon: reactjs },
    { title: "Redux", icon: redux },
    { title: "Firebase", icon: firebase },
    { title: "Tailwind", icon: tailwind },
    { title: "Figma", icon: figma },
    { title: "Python", icon: python },
    { title: "Flask", icon: flask },
    { title: "Django", icon: django },
    { title: "Oracle", icon: oracle },
    { title: "Docker", icon:docker},
    { title: "Nodejs", icon:nodejs},
    { title: "Typescript", icon:typescript},
    { title: "Git", icon:git},
    { title: "Mongo db", icon: mongodb },
    { title: "MySQL", icon: mysql },
  ];
  return (
    <div
      id="technologies"
      className=" w-[100%] min-h-[100vh] pt-[20vh] flex flex-col gap-8 px-5 sm:px-0"
    >
      <div className="flex items-center justify-between w-full   sm:flex-row flex-col gap-4">
        <div className="sm:w-[30%] bg-gradient-to-r from-white via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold w-full">
          Our Technolgies 
        </div>
      {/*   <div className="text-gray-500 w-full sm:w-[50%]">
          we have many interesting services with profesional team , that will
          help your work to be better
        </div> */}
      </div>
      <div className=" grid p-8 lg:grid-cols-10 md:grid-cols-7 sm:grid-cols-5 grid-cols-3 gap-8 ">
        {tech.map((e,index) => {
          return (
            <div key={index}
              style={{ backgroundImage: `url(${e.icon})` }}
              className={`w-[100%] h-[10vh] text-center  p-10 rounded text-black flex justify-center  items-center bg-center bg-cover  ${
                (e.title == "Django" || e.title == "Flask") && "bg-white"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
