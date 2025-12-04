import { Link, useLocation } from 'react-router-dom'
import imageLogo from '../assets/LogoGOD.png'
import { isAuthenticated, getUsername, clearJWT } from './auth/auth-helper';

const Layout = () => 
{
    const location = useLocation();
    const signoutClick = () => {
        clearJWT();
    }

    return(
        <>
        <nav className="navbar">
              <img src={imageLogo} alt="Logo" className='logo'/>
                <Link to="/"><i className="fas fa-home"></i> Home</Link>
                <Link to="/about"><i className="fa-solid fa-address-card"></i> About</Link>
                <Link to="/projects/list"><i className="fas fa-project-diagram"></i> Projects</Link>
                <Link to="/services/list"><i className="fa-regular fa-rectangle-list"></i>Services</Link>
                <Link to="/contact/list"><i className="fa-regular fa-rectangle-ListComponent"></i>Contact</Link>
                {!isAuthenticated() &&
                <Link to="/users/signin"><i className="fa-solid fa-right-to-bracket"></i> Signin</Link>}
                {isAuthenticated() &&
                <Link to="/" onClick={signoutClick}><i className="fa-solid fa-right-from-bracket"></i> Sign-out ({getUsername()})</Link>}
        </nav>
        </>
    );
}
export default Layout;