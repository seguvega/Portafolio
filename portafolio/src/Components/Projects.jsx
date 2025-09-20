import photo1 from '../assets/Project1.png'
import photo2 from '../assets/Project2.png'
import photo3 from '../assets/Project3.png'
import ListComponent from './ListComponent';

const PList =
[
    {imagePath: photo1, title: "Escape And Build" , text: 'My game made in UnrealEngine 5 its a multiplayer tower defeanse.'},
    {imagePath: photo2, title: "Server C++", text: 'My own Server build in Sockets using C++'},
    {imagePath: photo3, title: "Invasion", text: 'My coop project made in Unity. Role: programmer'}
];

let Projects = () =>
{
    return(
        <>
        <h2>Projects</h2>
        <ListComponent List={PList} /> {/*To send the data you need to type the name of your FuncParameter ex List*/}
        </>
    );
}

export default Projects;