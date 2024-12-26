import Navbar from "../components/Navbar";
import SkillsCard from "../components/SkillsCard";
import skillCss from "../styles/modules/Skills.module.css";
// icons for skill card
import htmlImg from "../images/icons/px128/html.png";
import cssImg from "../images/icons/px128/css.png";
import cppImg from "../images/icons/px128/cpp.png";
import reactImg from "../images/icons/px128/react.png";
import pythonImg from "../images/icons/px128/python.png";
import javaImg from "../images/icons/px128/java.png";
import flutterImg from "../images/icons/px128/flutter.png";
import arduinoImg from "../images/icons/px128/arduino.png";
import jsImg from "../images/icons/px128/js.png";
import githubImg from "../images/icons/px128/github.png";
import vbnetImg from "../images/icons/px128/vbnet.png";

export default function Skills() {
    return (
        <>
            <Navbar activeSkills="active" />
            <div className={skillCss.mainContainer}>
                <h1>
                    Here are my <span>SKILLS</span>
                </h1>
                <div className={skillCss.skillContainer}>
                    <SkillsCard image={htmlImg} name="HTML" />
                    <SkillsCard image={cssImg} name="CSS" />
                    <SkillsCard image={jsImg} name="JAVASCRIPT" />
                    <SkillsCard image={reactImg} name="REACT JS" />
                    <SkillsCard image={pythonImg} name="PYTHON" />
                    <SkillsCard image={cppImg} name="C++" />
                    <SkillsCard image={javaImg} name="JAVA" />
                    <SkillsCard image={flutterImg} name="FLUTTER" />
                    <SkillsCard image={githubImg} name="GITHUB" />
                    <SkillsCard image={arduinoImg} name="ARDUINO" />
                    <SkillsCard image={vbnetImg} name="VISUAL BASIC" />
                </div>
            </div>
        </>
    );
}
