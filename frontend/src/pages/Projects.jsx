import Navbar from "../components/Navbar";
import projectCss from "../styles/modules/Projects.module.css";
// images for project
import ProjectsCard from "../components/ProjectsCard";
import thesisWebpageImg from "../images/thesis-webpage.png";
import qrScannerImg from "../images/qr-scanner.png";
import nonInvertingImg from "../images/non-inverting.png";
import trafficImg from "../images/trafficlight.png";
// images for tech used
import gpsImg from "../images/gps.png";
import reactImg from "../images/icons/react.png";
import viteImg from "../images/icons/vite.png";
import vercelImg from "../images/icons/vercel.png";
import vbnetImg from "../images/icons/vbnet.png";
import cppImg from "../images/icons/cpp.png";
import arduinoImg from "../images/icons/arduino.png";
import mongoImg from "../images/icons/mongo.png";
import expressImg from "../images/icons/expressjs.png";
import pythonImg from "../images/icons/python.png";
import opencvImg from "../images/icons/opencv.png";
import numpyImg from "../images/icons/numpy.png";
import flutterImg from "../images/icons/flutter.png";
import mapsImg from "../images/icons/maps.png";
import dartImg from "../images/icons/dart.png";
import githubImg from "../images/icons/mygithub.png";
import javaImg from "../images/icons/px128/java.png";

export default function Projects() {
    return (
        <>
            <Navbar activeProjects="active" />
            <div className={projectCss.mainContainer}>
                <div className={projectCss.introHalf}>
                    <div className={projectCss.aboutIntro}>
                        <h1>
                            These are some of my <span>PROJECTS</span>
                        </h1>
                    </div>
                </div>
                <div className={projectCss.projectsHalf}>
                    <div className={projectCss.promoteGithub}>
                        <h3>More of my projects at: </h3>
                        <a href="https://github.com/seannn9" target="_blank">
                            <img src={githubImg} alt="seannn9's Github" />
                        </a>
                    </div>
                    <ProjectsCard
                        image={qrScannerImg}
                        name="QR Code Scanner"
                        details="This app was the final project for our course DSP. This is a simple QR code scanner that works with both images and live video feed of a QR. It outputs the data of the QR and makes it clickable for easy access."
                        tech={[pythonImg, opencvImg, numpyImg]}
                        sourceCode="https://github.com/seannn9/QR-SCANNER"
                    />
                    <ProjectsCard
                        image={gpsImg}
                        name="SeaNavigate & Traxing"
                        details="This mobile app was a simple implementation of Google Maps API. It provides the user a quick and easy way to navigate the road with its real-time navigation and simple user interface."
                        tech={[flutterImg, dartImg, mapsImg]}
                        sourceCode="https://github.com/seannn9/GPS-App"
                    />
                    <ProjectsCard
                        image={nonInvertingImg}
                        name="Non-Inverting OP Amp IC Tester"
                        details="This program was our midterm project for Embedded Systems which is checking if an IC is good or bad based on its output voltages."
                        tech={[vbnetImg, cppImg, arduinoImg]}
                    />
                    <ProjectsCard
                        image={thesisWebpageImg}
                        name="Thesis Webpage"
                        details="This website is for our thesis which is called Optimizing Plant Growth with Automated System for Controlled Environment Parameters. In this website the user can login to get access to the main function of the website which is to control the parameters of the greenhouse as they see fit. The user can also save their custom parameters as a preset for easy access."
                        tech={[
                            reactImg,
                            viteImg,
                            vercelImg,
                            mongoImg,
                            expressImg,
                        ]}
                        sourceCode="https://github.com/seannn9/Thesis-Webpage-Mockup"
                    />
                    <ProjectsCard
                        image={trafficImg}
                        name="Traffic Light Simulation"
                        details="This program is a simulation of how a Traffic Light works and also comes with a manual control for users to play with."
                        tech={[javaImg]}
                        sourceCode="https://github.com/seannn9/TrafficLights"
                    />
                </div>
            </div>
        </>
    );
}
