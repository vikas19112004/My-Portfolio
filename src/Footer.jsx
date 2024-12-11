import "./Footer.css"
import { Link } from 'react-scroll';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Footer() {
    return (
        <div className="footer">
            <div className="footerDiv1">
                <h1>VIKAS KUMAWAT</h1>
                <div>
                    <Link to="home">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="projects">Projects</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Footer;