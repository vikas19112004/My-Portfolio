import './Header.css'
import { Link } from 'react-scroll';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Header() {
    return (
        <>
            <div className="Header">
                <h1 className="myName">VIKAS KUMAWAT</h1>
                <ul className="headerButtons">
                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Header;