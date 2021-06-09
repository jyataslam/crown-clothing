import React from "react";

import { ModernLink } from "./modern-button.styles";

const ModernButton = ({ title, route, ...props }) => (
    <ModernLink to={route} {...props}>
        {title}
    </ModernLink>
);

export default ModernButton;
