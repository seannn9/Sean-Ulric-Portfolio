import Navbar from "../components/Navbar";
import "../styles/App.css";
import me from "../images/me2.png";
import githubImg from "../images/icons/github.png";
import linkedinImg from "../images/icons/linkedin.png";

export default function Home() {
    return (
        <>
            <Navbar activeHome="active" />
            <div className="mainContainer">
                <div className="firstHalf">
                    <div className="introductionCard">
                        <h2>HELLO, I AM</h2>
                        <h1 className="names" id="myName">
                            SEAN ULRIC MONTANO
                        </h1>
                        <br />
                        <h2>COMPUTER ENGINEERING STUDENT</h2>
                        <h1 className="names" id="myUni">
                            @ DE LA SALLE UNIVERSITY - DASMARIÑAS
                        </h1>
                    </div>
                </div>
                <div className="secondHalf">
                    <img src={me} alt="It's me!" />
                    <div className="contactContainer">
                        <h3>Find me on:</h3>
                        <a href="https://github.com/seannn9" target="_blank">
                            <img src={githubImg} alt="seannn9's Github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/seanmontano/"
                            target="_blank"
                        >
                            <img src={linkedinImg} alt="Sean's Linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
