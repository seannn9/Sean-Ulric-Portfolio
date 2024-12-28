import propTypes from "prop-types";
import projectCss from "../styles/modules/Projects.module.css";
import githubImg from "../images/icons/github.png";

export default function ProjectsCard(props) {
    return (
        <>
            <div className={projectCss.projectCards}>
                <div className={projectCss.projectRow}>
                    <img className={projectCss.image} src={props.image} />
                    <div className={projectCss.projectInfo}>
                        <h2 className={projectCss.projectName}>{props.name}</h2>
                        <h4 className={projectCss.details}>{props.details}</h4>
                    </div>
                </div>
                {props.tech && props.tech.length > 0 && (
                    <div className={projectCss.techUsed}>
                        <div className={projectCss.technologies}>
                            <h4>Technology Used: </h4>
                            {props.tech.map((techImg, index) => (
                                <img key={index} src={techImg} />
                            ))}
                        </div>
                        <div className={projectCss.sourceCode}>
                            <h4>Source Code: </h4>
                            <a href={props.sourceCode} target="_blank">
                                <img src={githubImg} alt="source code" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

ProjectsCard.propTypes = {
    image: propTypes.any.isRequired,
    name: propTypes.string.isRequired,
    details: propTypes.string.isRequired,
    tech: propTypes.arrayOf(propTypes.string).isRequired,
    sourceCode: propTypes.string,
};
