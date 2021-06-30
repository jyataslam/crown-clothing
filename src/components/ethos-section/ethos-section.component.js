import React from "react";

import SectionTitle from "../section-title/section-title.component";

import ClockImage from "../../assets/images/clock.png";
import DisciplineImage from "../../assets/images/discipline.png";
import AccountabilityImage from "../../assets/images/dumbbell.png";
import FortyImage from "../../assets/images/40-percent.png";
import HumilityImage from "../../assets/images/humility.png";
import UncommonImage from "../../assets/images/uncommon.png";

import {
    Main,
    IconsContainer,
    IconContainer,
    Header,
    Text,
} from "./ethos-section.styles";

const EthosSection = () => {
    return (
        <Main>
            <SectionTitle
                title="driven, not motivated"
                subtitle="It isn't only about the physical...it's about transforming your mind through a set of core ethos."
            />
            <IconsContainer>
                <IconContainer data-aos="fade-up">
                    <img src={ClockImage} alt="clock icon" />
                    <Header>day one mentality</Header>
                    <Text>We live with a day one, week one mentality</Text>
                </IconContainer>
                <IconContainer data-aos="fade-up" data-aos-delay="100">
                    <img src={DisciplineImage} alt="clock icon" />
                    <Header>self-discipline</Header>
                    <Text>
                        It takes relentless self discipline to schedule
                        suffering into your day
                    </Text>
                </IconContainer>
                <IconContainer data-aos="fade-up" data-aos-delay="200">
                    <img src={AccountabilityImage} alt="clock icon" />
                    <Header>personal accountability</Header>
                    <Text>
                        While most stop when they're tired, we stop when we're
                        done
                    </Text>
                </IconContainer>
                <IconContainer data-aos="fade-up" data-aos-delay="300">
                    <img src={FortyImage} alt="clock icon" />
                    <Header>40% Rule</Header>
                    <Text>
                        You’re probably living at about 40% of your true
                        capability
                    </Text>
                </IconContainer>
                <IconContainer data-aos="fade-up" data-aos-delay="400">
                    <img src={HumilityImage} alt="clock icon" />
                    <Header>humility</Header>
                    <Text>
                        We must contend with humiliation, broken dreams,
                        sadness, and loss
                    </Text>
                </IconContainer>
                <IconContainer data-aos="fade-up" data-aos-delay="500">
                    <img src={UncommonImage} alt="clock icon" />
                    <Header>Uncommon Amongst The Uncommon</Header>
                    <Text>
                        Our life’s mission is to become the uncommon amongst the
                        uncommon
                    </Text>
                </IconContainer>
            </IconsContainer>
        </Main>
    );
};

export default EthosSection;
