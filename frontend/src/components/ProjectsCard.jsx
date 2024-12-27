import propTypes from "prop-types";
import projectCss from "../styles/modules/Projects.module.css";

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
                        <h4>Technology Used: </h4>
                        {props.tech.map((techImg, index) => (
                            <img key={index} src={techImg} />
                        ))}
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
};
