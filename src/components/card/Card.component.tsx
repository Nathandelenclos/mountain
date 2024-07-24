import React from "react";
import {Container, Description, Image, Title} from "./Card.style";

type CardProps = {
    title: string;
    description: string;
    image: string;
    color?: string;
};

const CardComponent = ({title, description, image, color = "#ea6710"}: CardProps) => {
    return (
        <Container color={color}>
            <Image src={image} alt={title}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
}

export const Card = CardComponent;
