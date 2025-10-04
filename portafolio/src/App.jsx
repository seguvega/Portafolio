import { BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from "react"; //To use effect
import './App.css'
import MainRouter from './MainRouter'

function App() {
useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      document.body.style.paddingTop = navbar.offsetHeight + "px";

      // update on window resize too
      const handleResize = () => {
        document.body.style.paddingTop = navbar.offsetHeight + "px";
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <>
    <Router>
      <MainRouter />
    </Router>
    </>
  )
}

export default App
