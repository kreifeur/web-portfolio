const Services = () => {
    const services =[
        {title:'Front-end web developement '},
        {title:'Back-end web developement '},
        {title:'Ui/Ux design'},
    ]
        
    
  return (
    <div id="services" className=" w-[100%] min-h-[100vh] pt-[20vh] ">
      <div className=" grid p-8 grid-cols-1 md:grid-cols-3  sm:grid-cols-2 gap-8">
        {services.map((e)=> {return  <div className="w-[100%] h-[30vh] text-center bg-purple-200 p-10 rounded text-black">
            <div className="text-lg font-bold">{e.title}</div>
            
        </div> } )}
      </div>
    </div>
  );
};

export default Services;
