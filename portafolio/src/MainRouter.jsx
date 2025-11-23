import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services/ListService";
import AddService from "./Components/Services/AddService";
import EditService from "./Components/Services/EditService";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import ListProject from "./Components/Projects/ListProject";
import AddProject from "./Components/Projects/AddProject";
import EditProject from "./Components/Projects/EditProject";


const MainRouter = () => 
{
    return(
        <>
        <div>
            <Layout />
            <Routes>
                <Route path="/" element ={<Home />}/>
                <Route path="/about" element ={<AboutMe />}/>
                <Route path="/projects/list" element={<ListProject />} />
                <Route path="/projects/add" element={<AddProject />} />
                <Route path="/projects/edit/:id" element={<EditProject />} />
                <Route path="/services/list" element ={<Services />}/>
                <Route path="/services/add" element ={<AddService />}/>
                <Route path="/services/edit/:id" element ={<EditService />}/>
                <Route path="/contact" element ={<Contact />}/>
                <Route path="*" element ={<NotFound />}/>
            </Routes>
        </div>
        </>
    );
}

export default MainRouter;