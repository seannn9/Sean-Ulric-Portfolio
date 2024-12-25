import propTypes from "prop-types";

export default function ProjectsCard(props) {
    return (
        <>
            <div className="projectCards">
                <div className="projectRow">
                    <img className="image" src={props.image} />
                    <div className="projectInfo">
                        <h2 className="projectName">{props.name}</h2>
                        <h3 className="details">{props.details}</h3>
                    </div>
                </div>
                {props.tech && props.tech.length > 0 && (
                    <div className="techUsed">
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
