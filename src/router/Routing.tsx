import DetailsProjects from "@/components/DetailsProjects";
import Inicio from "@/components/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {

  
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/project/:id" element={<DetailsProjects/>} />
        </Routes>
    </BrowserRouter>


  )
}

export default Routing