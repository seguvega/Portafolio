import photo1 from '../assets/GeneralProgramming.jpg'
import photo2 from '../assets/WebDevelopment.jpg'
import photo3 from '../assets/LaptopMaintenance.png'
import ListComponent from './ListComponent'

let ServicesL = [
    {imagePath: photo1, title: "General Programming", text: 'Coding software for many applications. I am accustom to OOP with C++ | Java | C# and Javascript'},
    {imagePath: photo2, title: "Web Development", text: 'MERN stack, GCP, GitHub. I prefer the backend and APIs'},
    {imagePath: photo3, title: "General Laptop Maintenance", text: 'Regular software updates and virus scans, physical cleaning of the screen, keyboard, and air vents, change the  thermal paste'}
]

let Services = () =>
{
    return(
        <>
        <h1>Services</h1>
        <ListComponent List={ServicesL} />
        </>
    );
} 
export default Services;