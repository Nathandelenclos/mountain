import React from 'react';
import {
    Button,
    Container,
    Content,
    Description,
    Number,
    NumberContainer,
    Subtitle,
    Title
} from "./AdventureSection.style";

const AdventureSectionComponent = () => {
    return (
        <Container>
            <Description>
                <Title>LÀ OÙ L'AVENTURE NE SE TERMINE JAMAIS</Title>
                <Subtitle>CRÉEZ VOTRE VOYAGE PARFAIT</Subtitle>
                <Content>
                    Explorez les routes les moins fréquentées, où votre passion pour l'aventure en plein air peut errer
                    et votre appréciation pour la nature s'approfondit. S'étendant des fjords spectaculaires et des îles
                    luxuriantes du parc national de Kenai Fjords au pic herculéen de Denali dans le parc national de
                    Denali, l'Alaska est une terre aux proportions épiques.
                </Content>
                <div>
                    <Button>RESERVEZ VOTRE TOUR</Button>
                </div>
            </Description>
            <NumberContainer>
                <Number>01</Number>
            </NumberContainer>
        </Container>
    );
}

export const AdventureSection = AdventureSectionComponent;
