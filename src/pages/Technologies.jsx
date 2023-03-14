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
      className=" w-[100%] min-h-[100vh] pt-[20vh] flex flex-col gap-8"
    >
      <div className="text-xl">Realize with Technologies </div>
      <div className=" grid p-8 lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 grid-cols-4 gap-8 ">
        {tech.map((e) => {
          return (
            <div
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
