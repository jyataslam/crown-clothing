import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./fader.styles.scss";

const Fader = ({ text }) => {
    const [fadeProp, setFadeProp] = useState({
        fade: "fade-in",
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === "fade-in") {
                setFadeProp({
                    fade: "fade-out",
                });
            } else {
                setFadeProp({
                    fade: "fade-in",
                });
            }
        }, 4000);

        return () => clearInterval(timeout);
    }, [fadeProp]);

    return (
        <>
            <p className={`${fadeProp.fade} fader`}>{text}</p>
        </>
    );
};

Fader.defaultProps = {
    text: "Hello World!",
};

Fader.propTypes = {
    text: PropTypes.string,
};

export default Fader;
