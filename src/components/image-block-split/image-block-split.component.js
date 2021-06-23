import React from "react";

import ModernButton from "../modern-button/modern-button.component";

import {
    SectionWrapper,
    Half,
    Image,
    TextContainer,
} from "./image-block-split.styles";

import GogginsImage from "../../assets/images/running-dark-bg.jpg";

const ImageBlockSplit = () => {
    return (
        <SectionWrapper>
            <Half>
                <Image src={GogginsImage} />
            </Half>
            <Half>
                <TextContainer>
                    <p>
                        "In a world where mediocrity is often the standard, our
                        life’s mission is to become the uncommon amongst the
                        uncommon."
                    </p>
                    <h4>david goggins</h4>
                    <ModernButton title="shop now" route="/shop" />
                </TextContainer>
            </Half>
        </SectionWrapper>
    );
};

export default ImageBlockSplit;
