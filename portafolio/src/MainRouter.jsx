import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services/ListService";
import AddService from "./Components/Services/AddService";
import EditService from "./Components/Services/EditService";
import ListProject from "./Components/Projects/ListProject";
import AddProject from "./Components/Projects/AddProject";
import EditProject from "./Components/Projects/EditProject";
import Contact from "./Components/contacts/ListContacts";
import AddContacts from "./Components/contacts/AddContacts";
import EditContacts from "./Components/contacts/EditContacts";
import NotFound from "./Components/NotFound";


const MainRouter = () => 
{
    //The route neet to match the same format name example ./Components/contacts/EditContacts.jsx im using export default EditContacts
    //but in /Components/Projects/AddProject.jsx im using export default ListProject
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
                <Route path="/contact/list" element ={<Contact />}/>
                <Route path="/contacts/add" element ={<AddContacts />}/>
                <Route path="/contacts/edit/:id" element ={<EditContacts />}/>
                <Route path="*" element ={<NotFound />}/>
            </Routes>
        </div>
        </>
    );
}

export default MainRouter;