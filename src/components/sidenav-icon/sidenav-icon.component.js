import React from "react";

import iconImage from "../../assets/images/logo_axe.png";

import { UserIconContainer, Icon, Username } from "./sidenav-icon.styles";

const UserIcon = ({ username }) => {
    return (
        <UserIconContainer>
            <Icon src={iconImage} />
            <Username>{username}</Username>
        </UserIconContainer>
    );
};

export default UserIcon;
