import React from "react";

import Hero from "../../components/hero/hero.component";

import image from "../../assets/images/hero_homepage.jpg";

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
                title="about"
                backgroundSizeClass="small"
                backgroundImage={image}
            />
            <AboutWrapper>
                <CategoryHeading>about stay hard</CategoryHeading>
                <CategoryDescription>
                    My name is Jason Yata and I made Stay Hard as a tribute to
                    David Goggins as well as to showcase my ability to create a
                    fully functioning e-commerce website built entirely from the
                    ground up. I needed some sort of theme to use and what
                    better to use than the man, the myth, the legend, Mr.
                    Goggins himself. <br></br>
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
