import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

const MainRouter = () => 
{
    return(
        <>
        <div classname= "body">
            <Layout />
            <Routes>
                <Route path="/" element ={<Home />}/>
                <Route path="/about" element ={<AboutMe />}/>
                <Route path="/projets" element ={<Projects />}/>
                <Route path="/services" element ={<Services />}/>
                <Route path="/contact" element ={<Contact />}/>
                <Route path="*" element ={<NotFound />}/>
            </Routes>
        </div>
        </>
    );
}

export default MainRouter;