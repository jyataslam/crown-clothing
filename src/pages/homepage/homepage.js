import React from "react";
import Directory from "../../components/directory/directory";
import Hero from "../../components/hero/hero.component";
import HeroSplit from "../../components/hero-split/hero-split.component";

import {
    HomePageContainer,
    FlexContainer,
    FlexContainerColumn,
} from "./homepage.styles";

import image from "../../assets/images/goggins_running_in_ocean.jpeg";
import splitImage from "../../assets/images/running_with_water_vest.jpg";
import summerCollectionSplitImage from "../../assets/images/shop_image.jpg";
import Ethos from "../../components/ethos/ethos.component";

const Homepage = () => (
    <HomePageContainer>
        <FlexContainer>
            <Hero
                backgroundImage={image}
                title="Stay Hard"
                subtitle="A Tribute to the hardest man alive"
                route="/shop"
                btnTitle="Shop Now"
                backgroundPositionCenter="background-position-center"
            />
            <FlexContainerColumn>
                <HeroSplit
                    bgImage={summerCollectionSplitImage}
                    title="summer collection"
                    subtitle="gear up for the summer heat"
                    url="/shop"
                />
                <HeroSplit
                    bgImage={splitImage}
                    title="bodyweight program"
                    subtitle="strengthen your core to the max"
                    url="/bodyweight-program"
                />
            </FlexContainerColumn>
        </FlexContainer>
        <Ethos />
        <Directory />
    </HomePageContainer>
);

export default Homepage;
