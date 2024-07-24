import React from 'react';
import {CardContainer, Container, Content, MountainImage} from "./Header.style";
import {Card} from "../card/Card.component";

const HeaderComponent = () => {

    const cards = [
        {
            title: "POURQUOI NOUS?",
            description: "Nous créons des allers-retours depuis 17 ans et nous sommes déterminés à vous fournir le voyage",
            image: "man.png",
            color: "#6da2d9"
        },
        {
            title: "PLANIFIEZ VOTRE VOYAGE",
            description: "Tu es responsable! Créez votre propre aller-retour avec nos services étendus en voitures, hôtels et vols.",
            image: "mountain.png",
            color: "#ea6710"
        },
        {
            title: "TOURS DE VACANCES",
            description: "Réservez des circuits touristiques dans le monde entier, y compris des circuits d'aventure et culturels de grands fournisseurs tels que Intrepid, Trafalgar, Contiki",
            image: "backpack.png",
            color: "#fb3700"
        }
    ];

    return (
        <Container>
            <MountainImage/>
            <Content>
                {cards.map((card, index) => (
                    <CardContainer key={index}>
                        <Card title={card.title} description={card.description} image={card.image} color={card.color}/>
                    </CardContainer>
                ))}
            </Content>
        </Container>
    );
}

export const Header = HeaderComponent;
