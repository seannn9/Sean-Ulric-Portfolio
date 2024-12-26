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
        scale: 1, // default scale
        speed: 1000, // default is 300ms
        max: 15, // default max tilt rotation
    };
    return (
        <Tilt className={skillCss.card} options={options}>
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
        </Tilt>
    );
}

SkillsCard.propTypes = {
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
};
