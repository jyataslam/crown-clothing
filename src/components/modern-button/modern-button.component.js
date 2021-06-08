import React from "react";

import { ModernLink } from "./modern-button.styles";

const ModernButton = ({ title, route }) => (
    <ModernLink to={route} whiteAndTransparent>
        {title}
    </ModernLink>
);

export default ModernButton;
