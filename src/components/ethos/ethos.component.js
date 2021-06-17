import React from "react";

import {
    Main,
    Quote,
    Header,
    Subheader,
    IconsContainer,
    EthosSection,
    EthoContainer,
    EthoBackgroundImage,
    EthoHeader,
    EthoDescription,
    QuoteSection,
    QuoteOwnerContainer,
    QuoteName,
    QuoteTitle,
} from "./ethos.styles";

import Quotations from "../../assets/images/quotations.png";
import Headshot from "../../assets/images/quote_headshot.jpg";

import DayOneImage from "../../assets/images/pull-ups.jpg";
import AccountabilityImage from "../../assets/images/accountability.jpg";
import DisciplineImage from "../../assets/images/discipline.jpg";

const Ethos = () => (
    <Main>
        <QuoteSection>
            <img
                src={Quotations}
                alt="double quotations"
                className="quotations"
            />
            <Quote>
                "In a world where mediocrity is often the standard, our life’s
                mission is to become the uncommon amongst the uncommon."
            </Quote>
            <QuoteOwnerContainer>
                <QuoteName>David Goggins</QuoteName>
                <QuoteTitle>Owner, Badass Motherfucker</QuoteTitle>
                <img
                    src={Headshot}
                    alt="david goggins headshot"
                    className="headshot"
                />
            </QuoteOwnerContainer>
        </QuoteSection>
        <EthosSection>
            <Header>Driven, not motivated</Header>
            <Subheader>
                It isn't only about the physical...it's about transforming your
                mind through a set of core ethos.<br></br>It's what STAY HARD
                stands for.
            </Subheader>
            <IconsContainer>
                <EthoContainer bgImage={DayOneImage}>
                    <EthoBackgroundImage></EthoBackgroundImage>
                    <EthoHeader>Day One Mentality</EthoHeader>
                    <EthoDescription>
                        We live with a day one, week one mentality.
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer bgImage={DisciplineImage}>
                    <EthoBackgroundImage></EthoBackgroundImage>
                    <EthoHeader>Self-discipline</EthoHeader>
                    <EthoDescription>
                        It takes relentless self discipline to schedule
                        suffering into your day, every day.
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer bgImage={AccountabilityImage}>
                    <EthoBackgroundImage></EthoBackgroundImage>
                    <EthoHeader>personal accountability</EthoHeader>
                    <EthoDescription>
                        While most stop when they're tired, we stop when we're
                        done.
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer bgImage={AccountabilityImage}>
                    <EthoBackgroundImage></EthoBackgroundImage>
                    <EthoHeader>Humility</EthoHeader>
                    <EthoDescription>
                        To exist in this world, we must contend with
                        humiliation, broken dreams, sadness, and loss.
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer bgImage={AccountabilityImage}>
                    <EthoBackgroundImage></EthoBackgroundImage>
                    <EthoHeader>40% Rule</EthoHeader>
                    <EthoDescription>
                        No matter who you are, who your parents are or were,
                        where you live, what you do for a living, or how much
                        money you have, you’re probably living at about 40
                        percent of your true capability.
                    </EthoDescription>
                </EthoContainer>
                <EthoContainer bgImage={AccountabilityImage}>
                    <EthoBackgroundImage></EthoBackgroundImage>
                    <EthoHeader>Stay Hard</EthoHeader>
                    <EthoDescription>
                        We live with a day one week one mentality.
                    </EthoDescription>
                </EthoContainer>
            </IconsContainer>
        </EthosSection>
    </Main>
);

export default Ethos;
