import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
   <>
   <Navbar />
    <div className="pt-20">
     <Home />
    
    </div>
   </>
  );
};

export default App;
