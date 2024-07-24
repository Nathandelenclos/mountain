import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    padding: 40px 30px;
    text-align: center;
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
`;

export const Title = styled.h4`
    font-family: Roboto, sans-serif;
    line-height: 1.6;
    font-weight: 400;
    font-size: 24px;
    margin: 20px 0 0 0;
`;

export const Description = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-style: italic;
    line-height: 1.6;
`;
