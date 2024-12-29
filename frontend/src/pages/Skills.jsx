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
import phpImg from "../images/icons/px128/php.png";

export default function Skills() {
    return (
        <>
            <Navbar activeSkills="active" />
            <div className={skillCss.mainContainer}>
                <h1 style={{ textAlign: "center" }}>
                    Here are the <span className={skillCss.skills}>SKILLS</span>{" "}
                    <br />
                    that I acquired during College and Self-Study
                </h1>
                <div className={skillCss.skillContainer}>
                    <SkillsCard
                        image={htmlImg}
                        name="HTML"
                        style={{ width: "80%" }}
                        levelText={80}
                    />
                    <SkillsCard
                        image={cssImg}
                        name="CSS"
                        style={{ width: "60%" }}
                        levelText={60}
                    />
                    <SkillsCard
                        image={jsImg}
                        name="JAVASCRIPT"
                        style={{ width: "25%" }}
                        levelText={25}
                    />
                    <SkillsCard
                        image={reactImg}
                        name="REACT JS"
                        style={{ width: "45%" }}
                        levelText={45}
                    />
                    <SkillsCard
                        image={pythonImg}
                        name="PYTHON"
                        style={{ width: "55%" }}
                        levelText={55}
                    />
                    <SkillsCard
                        image={cppImg}
                        name="C++"
                        style={{ width: "45%" }}
                        levelText={45}
                    />
                    <SkillsCard
                        image={javaImg}
                        name="JAVA"
                        style={{ width: "45%" }}
                        levelText={45}
                    />
                    <SkillsCard
                        image={flutterImg}
                        name="FLUTTER"
                        style={{ width: "50%" }}
                        levelText={50}
                    />
                    <SkillsCard
                        image={githubImg}
                        name="GITHUB"
                        style={{ width: "70%" }}
                        levelText={70}
                    />
                    <SkillsCard
                        image={arduinoImg}
                        name="ARDUINO"
                        style={{ width: "45%" }}
                        levelText={45}
                    />
                    <SkillsCard
                        image={vbnetImg}
                        name="VISUAL BASIC"
                        style={{ width: "70%" }}
                        levelText={70}
                    />
                    <SkillsCard
                        image={phpImg}
                        name="PHP"
                        style={{ width: "35%" }}
                        levelText={35}
                    />
                </div>
            </div>
        </>
    );
}
