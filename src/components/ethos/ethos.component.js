import React from "react";

import {
    Main,
    Header,
    Subheader,
    IconsContainer,
    EthoOpacityOverlay,
    EthosSection,
    EthoContainer,
    EthoBackgroundImage,
    EthoHeader,
    EthoDescription,
} from "./ethos.styles";

import DayOneImage from "../../assets/images/pull-ups.jpg";
import AccountabilityImage from "../../assets/images/accountability.jpg";
import DisciplineImage from "../../assets/images/discipline.jpg";
import FortyPercentImage from "../../assets/images/carrying_log.jpg";
import HumilityImage from "../../assets/images/humility.jpg";
import UncommonImage from "../../assets/images/uncommon.jpg";

const Ethos = () => (
    <Main>
        <EthosSection>
            <Header data-aos="fade">Driven, not motivated</Header>
            <Subheader data-aos="fade">
                It isn't only about the physical...it's about transforming your
                mind through a set of core ethos.<br></br>It's what STAY HARD
                stands for.
            </Subheader>
            <IconsContainer>
                <EthoContainer>
                    <EthoOpacityOverlay />
                    <EthoBackgroundImage
                        bgImage={DayOneImage}
                    ></EthoBackgroundImage>
                    <EthoHeader>Day One Mentality</EthoHeader>
                    <EthoDescription>
                        We live with a day one, week one mentality.
                        <br></br>
                        <br></br>
                        <span>Day One Mentality</span>
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer>
                    <EthoOpacityOverlay />
                    <EthoBackgroundImage
                        bgImage={DisciplineImage}
                    ></EthoBackgroundImage>
                    <EthoHeader>Self-discipline</EthoHeader>
                    <EthoDescription>
                        It takes relentless self discipline to schedule
                        suffering into your day, every day.
                        <br></br>
                        <br></br>
                        <span>Self-discipline</span>
                    </EthoDescription>
                </EthoContainer>

                <EthoContainer>
                    <EthoOpacityOverlay />
                    <EthoBackgroundImage
                        bgImage={AccountabilityImage}
                    ></EthoBackgroundImage>
                    <EthoHeader>personal accountability</EthoHeader>
                    <EthoDescription>
                        While most stop when they're tired, we stop when we're
                        done.
                        <br></br>
                        <br></br>
                        <span>personal accountability</span>
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer>
                    <EthoOpacityOverlay />
                    <EthoBackgroundImage
                        bgImage={FortyPercentImage}
                    ></EthoBackgroundImage>
                    <EthoHeader>40% Rule</EthoHeader>
                    <EthoDescription>
                        No matter who you are, who your parents are or were,
                        where you live, what you do for a living, or how much
                        money you have, you’re probably living at about 40
                        percent of your true capability.
                        <br></br>
                        <br></br>
                        <span>40% Rule</span>
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer>
                    <EthoOpacityOverlay />
                    <EthoBackgroundImage
                        bgImage={HumilityImage}
                    ></EthoBackgroundImage>
                    <EthoHeader>Humility</EthoHeader>
                    <EthoDescription>
                        To exist in this world, we must contend with
                        humiliation, broken dreams, sadness, and loss.
                        <br></br>
                        <br></br>
                        <span>Humility</span>
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer>
                    <EthoOpacityOverlay />
                    <EthoBackgroundImage
                        bgImage={UncommonImage}
                    ></EthoBackgroundImage>
                    <EthoHeader>Uncommon Amongst The Uncommon</EthoHeader>
                    <EthoDescription>
                        In a world where mediocrity is often the standard, our
                        life’s mission is to become the uncommon amongst the
                        uncommon.
                        <br></br>
                        <br></br>
                        <span>Uncommon Amongst The Uncommon</span>
                    </EthoDescription>
                </EthoContainer>
            </IconsContainer>
        </EthosSection>
    </Main>
);

export default Ethos;
