import skillCss from "../styles/modules/Skills.module.css";
import propTypes from "prop-types";

export default function SkillsCard(props) {
    return (
        <div className={skillCss.card}>
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
        </div>
    );
}

SkillsCard.propTypes = {
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
};
