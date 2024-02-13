import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CarWidget';
import './NavBar.css'
import {Link, NavLink} from "react-router-dom";

function NavBar() {
  return (
    <>
    <header>
    <nav >
    <NavLink to="/">Home</NavLink>
    <NavLink to="/categoria/Frutos_secos">Frutos Secos</NavLink>
    <NavLink to="/categoria/Legumbres">Legumbres</NavLink>
    <NavLink to="/categoria/Endulzantes">Endulzantes</NavLink>
    <NavLink to="#cartwidget"><CarWidget /></NavLink>
    </nav>
    </header>
    </>
  );
}
export default NavBar;
