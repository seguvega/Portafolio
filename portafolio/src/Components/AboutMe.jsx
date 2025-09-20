import Me from '../assets/ME.png';
import Resume from '../assets/Resume.pdf'

let AboutMe = () => 
{
    return(
        <>
         <h2>About Me</h2>
        <img src={Me}></img>
        <h3>Sebastian Gustavo Velasco Galarraga </h3>
        <p>
            I am a dedicated and adaptable game programmer with strong problem-solving skills and a passion for creating interactive experiences. I enjoy collaborating in teams, learning new technologies, and applying my C++ and Unreal Engine expertise to deliver high-quality projects.
        </p>
        <a href={Resume} download >
        Download My Resume
        </a>
        </>
    );
}

export default AboutMe;