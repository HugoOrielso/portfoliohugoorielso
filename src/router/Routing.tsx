import Inicio from "@/components/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Inicio/>} />
        </Routes>
    </BrowserRouter>


  )
}

export default Routing