import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
/* import Work from "./pages/Work"; */


const App = () => {
  
  
  return (
    <div className="w-[100%] min-h-[100vh]  text-sm flex justify-center bg-black text-white ">
      <div className="sm:w-[90%] w-[100vw] h-[100%] bg-black ">
          <Navbar/>
          <Home/>
          {/* <Work/> */}
          <Services/>
          <Technologies/>
          <Contact/>
          <Footer/>
      </div>
    </div>
  );
};

export default App;
