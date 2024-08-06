import React from 'react';
import {
    Container,
    Description,
    DescriptionContainer,
    ImageContainer,
    Left,
    MountainImage1,
    MountainImage2,
    MountainImage3,
    Right,
    Title
} from "./WatchWorld.style";

const WatchWorldComponent = () => {
    return (
        <Container>
            <Left>
                <ImageContainer>
                    <MountainImage1/>
                </ImageContainer>
                <ImageContainer>
                    <MountainImage2/>
                </ImageContainer>
            </Left>
            <Right>
                <MountainImage3/>
                <DescriptionContainer>
                    <Title>Voyons le monde</Title>
                    <Description>
                        Des citations de voyage d'aventure induisant la bravoure aux merveilleuses citations d'aventure,
                        nous espérons que notre collection des meilleures citations de voyage en famille vous inspirera
                        lors de vos voyages et encouragera votre âme errante!
                    </Description>
                </DescriptionContainer>
            </Right>
        </Container>
    );
}

export const WatchWorld = WatchWorldComponent;
