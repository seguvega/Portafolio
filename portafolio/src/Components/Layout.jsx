import { Link } from 'react-router-dom'
import imageLogo from '../assets/LogoGOD.png'

const Layout = () => 
{
    return(
        <>
        <nav className="navbar">
              <img src={imageLogo} alt="Logo" className='logo'/>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/projets"> Projects </Link>
            <Link to="/services"> Services </Link>
            <Link to="/contact"> Contact </Link>
        </nav>
        </>
    );
}
export default Layout;