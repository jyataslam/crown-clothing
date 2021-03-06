import React from "react";
import { motion } from "framer-motion";

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
import TopBannerImage from "../../assets/images/running-dark-bg.jpg";

import InitialTransition from "../../components/initial-transition/initial-transition.component";
import SectionTitle from "../../components/section-title/section-title.component";
import Banner from "../../components/banner/banner.component";
import EthosSection from "../../components/ethos-section/ethos-section.component";
import BookSection from "../../components/book-section/book-section.component";

const Homepage = () => {
    return (
        <HomePageContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <InitialTransition />
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
                        url="/"
                    />
                </FlexContainerColumn>
            </FlexContainer>
            <SectionTitle
                title="Gear up for day one, week one"
                subtitle="Made for the savage within us, inspired by our lord and savior David Goggins"
                addModernButton
            />
            <Banner backgroundImage={TopBannerImage} />
            <EthosSection />
            <BookSection />
            <SectionTitle
                title="shop"
                subtitle="Shop the latest shirts, leggings, hats, and more"
            />
            <Directory />
        </HomePageContainer>
    );
};

export default Homepage;
