import React from "react";
import Directory from "../../components/directory/directory";
import Hero from "../../components/hero/hero.component";

import { HomePageContainer } from "./homepage.styles";

import image from "../../assets/images/hero_homepage.jpg";

const Homepage = () => (
    <HomePageContainer>
        <Hero
            backgroundImage={image}
            backgroundSizeClass="large"
            title="Stay Hard"
            subtitle="A Tribute to the hardest man alive"
            route="/shop"
            btnTitle="Shop Now"
        />
        <Directory />
    </HomePageContainer>
);

export default Homepage;
