import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../styles/Navbar.css";

export default function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <Link className={props.activeHome} to="/">
                    Home
                </Link>
                {/* <Link className={props.activeAbout} to="/about">
                    About
                </Link> */}
                <Link className={props.activeSkills} to="/skills">
                    Skills
                </Link>
                <Link className={props.activeProjects} to="/projects">
                    Projects
                </Link>
            </div>
        </>
    );
}

Navbar.propTypes = {
    activeHome: propTypes.string,
    activeAbout: propTypes.string,
    activeSkills: propTypes.string,
    activeProjects: propTypes.string,
};
