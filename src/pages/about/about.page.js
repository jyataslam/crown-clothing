import React from "react";

import Hero from "../../components/hero/hero.component";

import image from "../../assets/images/hero_about.jpg";

import {
    AboutWrapper,
    CategoryDescription,
    CategoryHeading,
    CategoryList,
} from "./about.styles";

const AboutPage = () => {
    return (
        <section>
            <Hero
                backgroundSizeClass="small"
                backgroundImage={image}
                subpageAlignLeft
                textWidth50
                backgroundPositionCenter="background-position-center"
            />
            <AboutWrapper>
                <CategoryHeading>about stay hard</CategoryHeading>
                <CategoryDescription>
                    I'm a front end developer and I made Stay Hard as a tribute
                    to David Goggins as well as to showcase my ability to create
                    a fully functioning e-commerce website built entirely from
                    the ground up. I needed a theme and who better to draw
                    inspiration from than the man who has driven me to pursue my
                    passion of code from the beginning...Mr. David Goggins
                    himself.<br></br>
                    <br></br>
                    <i>
                        This is strictly a <b>TEST</b> website and no actual
                        goods are sold on here.
                    </i>{" "}
                </CategoryDescription>
                <CategoryHeading>tech used to build site</CategoryHeading>
                <CategoryList>
                    <li>React</li>
                    <li>Redux-Saga</li>
                    <li>Redux-Reselect</li>
                    <li>Jest</li>
                    <li>Firebase</li>
                    <li>Stripe API</li>
                    <li>Axios</li>
                    <li>Styled Components</li>
                    <li>SASS</li>
                </CategoryList>
                <CategoryHeading>Github Repo</CategoryHeading>
                <CategoryDescription>
                    Go{" "}
                    <a
                        href="https://github.com/jyataslam/stay-hard"
                        target="_blank"
                        rel="noreferrer"
                    >
                        here
                    </a>{" "}
                    to check out the code and browse the repository.
                </CategoryDescription>
                <CategoryHeading>Contact Me</CategoryHeading>
                <CategoryDescription>
                    Email:{" "}
                    <a href="mailto:jasonyata@gmail.com">jasonyata@gmail.com</a>
                </CategoryDescription>
            </AboutWrapper>
        </section>
    );
};

export default AboutPage;
