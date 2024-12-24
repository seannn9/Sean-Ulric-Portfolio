import Navbar from "../components/Navbar";
import "../styles/Projects.css";
import ProjectsCard from "../components/ProjectsCard";
import thesisWebpageImg from "../images/thesis-webpage.png";
import qrScannerImg from "../images/qr-scanner.png";

export default function Projects() {
    return (
        <>
            <Navbar activeProjects="active" />
            <div className="mainContainer">
                <div className="introHalf">
                    <div className="aboutIntro">
                        <h1>
                            These are some of my <span>PROJECTS</span>
                        </h1>
                    </div>
                </div>
                <div className="projectsHalf">
                    <ProjectsCard
                        image={thesisWebpageImg}
                        name="Thesis Webpage"
                        details="This website is for our thesis which is called Optimizing Plant Growth with Automated System for Controlled Environment Parameters. In this website the user can login to get access to the main function of the website which is to control the parameters of the greenhouse as they see fit. The user can also save their custom parameters as a preset for easy access."
                    />
                    <ProjectsCard
                        image={qrScannerImg}
                        name="QR Code Scanner"
                        details="This app was the final project for our course DSP. This is a simple QR code scanner that works with both images and live video feed of a QR."
                    />
                    <ProjectsCard
                        image=""
                        name="SeaNavigate & Traxing"
                        details="This mobile app was a simple implementation of Google Maps API."
                    />
                </div>
            </div>
        </>
    );
}
