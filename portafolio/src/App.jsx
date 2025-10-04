import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import MainRouter from './MainRouter'

function App() {
  const navbar = document.querySelector('.navbar');
  document.body.style.paddingTop = navbar.offsetHeight + "px";
  return (
    <>
    <Router>
      <MainRouter />
    </Router>
    </>
  )
}

export default App
