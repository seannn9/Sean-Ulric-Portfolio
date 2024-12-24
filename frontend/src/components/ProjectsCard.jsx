import propTypes from "prop-types";

export default function ProjectsCard(props) {
    return (
        <>
            <div className="projectCards">
                <img className="image" src={props.image} />
                <div className="projectInfo">
                    <h2 className="projectName">{props.name}</h2>
                    <h3 className="details">{props.details}</h3>
                </div>
            </div>
        </>
    );
}

ProjectsCard.propTypes = {
    image: propTypes.any,
    name: propTypes.string,
    details: propTypes.string,
};
