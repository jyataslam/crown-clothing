import React from "react";

import { ModernLink, Circle } from "./modern-button.styles";

const ModernButton = ({ title, route, total, ...props }) => (
    <ModernLink to={route} {...props}>
        {title}{" "}
        {total ? (
            <span>
                <Circle />${total}
            </span>
        ) : null}
    </ModernLink>
);

export default ModernButton;
