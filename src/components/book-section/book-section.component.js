import React from "react";

import BookImage from "../../assets/images/book-f5.jpg";
import BookMobileImage from "../../assets/images/book_mobile.jpg";
import AmazonLogo from "../../assets/images/amazon_logo.png";
import AudibleLogo from "../../assets/images/audible_logo.png";
import BarnesLogo from "../../assets/images/barnes_logo.png";

import {
    Main,
    Container,
    ContainerHalf,
    Header,
    Subheader,
    Image,
    ColorTitleSmall,
    DescriptionParagraph,
    LogosContainer,
    LogoContainer,
    Logo,
    MobileImage,
} from "./book-section.styles";

const BookSection = () => {
    return (
        <Main>
            <Container>
                <ContainerHalf>
                    <Image
                        src={BookImage}
                        alt="can't hurt me book by david goggins"
                    />
                </ContainerHalf>
                <ContainerHalf>
                    <Header>master your mind and defy the odds</Header>
                    <Subheader>
                        Learn how to overcome your mind with the New York Times
                        Bestseller, <span>Can't Hurt Me</span> by David Goggins.
                    </Subheader>
                    <MobileImage src={BookMobileImage} />
                    <ColorTitleSmall data-aos="fade-up">
                        about the book
                    </ColorTitleSmall>
                    <DescriptionParagraph
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        For David Goggins, childhood was a nightmare – poverty,
                        prejudice, and physical abuse colored his days and
                        haunted his nights. But through self-discipline, mental
                        toughness, and hard work, Goggins transformed himself
                        from a depressed, overweight young man with no future
                        into a U.S. Armed Forces icon and one of the world’s top
                        endurance athletes. The only man in history to complete
                        elite training as a Navy SEAL, Army Ranger, and Air
                        Force Tactical Air Controller, he went on to set records
                        in numerous endurance events, inspiring Outside magazine
                        to name him The Fittest (Real) Man in America.
                    </DescriptionParagraph>
                    <DescriptionParagraph
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        In Can’t Hurt Me, he shares his astonishing life story
                        and reveals that most of us tap into only 40% of our
                        capabilities. Goggins calls this The 40% Rule, and his
                        story illuminates a path that anyone can follow to push
                        past pain, demolish fear, and reach their full
                        potential.
                    </DescriptionParagraph>
                    <LogosContainer>
                        <LogoContainer
                            href="https://www.amazon.com/Cant-Hurt-Me-Master-Your-ebook/dp/B07H453KGH/"
                            target="_blank"
                            rel="noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Logo src={AmazonLogo} className="first-logo" />
                        </LogoContainer>
                        <LogoContainer
                            href="https://www.audible.com/pd/Cant-Hurt-Me-Audiobook/B07KKMNZCH"
                            target="_blank"
                            rel="noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <Logo src={AudibleLogo} />
                        </LogoContainer>
                        <LogoContainer
                            href="https://www.barnesandnoble.com/w/cant-hurt-me-david-goggins/1129732158?ean=9781544512273&st=PLA&sid=BNB_New+Core+Shopping+Books&sourceId=PLAGoNA&dpid=tdtve346c&2sid=Google_c&gclid=EAIaIQobChMIn9OGtsK_3wIVBQtpCh1uIweWEAYYASABEgKxpPD_BwE"
                            target="_blank"
                            rel="noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <Logo src={BarnesLogo} />
                        </LogoContainer>
                    </LogosContainer>
                </ContainerHalf>
            </Container>
        </Main>
    );
};

export default BookSection;
