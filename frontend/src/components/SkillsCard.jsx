import { useEffect, useRef } from "react";
import skillCss from "../styles/modules/Skills.module.css";
import propTypes from "prop-types";
import VanillaTilt from "vanilla-tilt"; // from https://github.com/micku7zu/vanilla-tilt.js

// Tilt code from: https://codesandbox.io/p/sandbox/vanilla-tilt-with-react-n5ptm?file=%2Fsrc%2Findex.js
function Tilt(props) {
    const { options, ...reset } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);
    return <div ref={tilt} {...reset} />;
}

export default function SkillsCard(props) {
    const options = {
        scale: 1,
        speed: 1000,
        max: 15,
    };
    return (
        <Tilt className={skillCss.card} options={options}>
            <img loading="lazy" src={props.image} />
            <h2>{props.name}</h2>
            <div className={skillCss.levelContainer}>
                <div className={skillCss.level} style={props.style}>
                    <p>{props.levelText}</p>
                </div>
            </div>
        </Tilt>
    );
}

SkillsCard.propTypes = {
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    levelText: propTypes.number,
    style: propTypes.object,
    alt: propTypes.string,
};
