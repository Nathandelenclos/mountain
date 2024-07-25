import styled from "styled-components";

export const Container = styled.section`
    background-color: #292d33;
    display: flex;
    flex-direction: row;
    padding: 0 20%;
    @media (max-width: 768px) {
        padding: 0 10%;
    }
    @media (max-width: 480px) {
        padding: 0 0;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 60px;
    font-weight: 500;
    line-height: 1.1;
    margin: 0;
`;

export const Subtitle = styled.h4`
    color: #999;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 10px 0 0 0;
`;

export const Content = styled.p`
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 42px 0 0 0;
`;

export const Button = styled.button`
    background-color: #ea6710;
    font-size: 16px;
    color: #fff;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 20px 0 0 0;

    &:hover {
        background-color: #c6530a;
    }
`;

export const NumberContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    padding: 20px;
`;

export const Number = styled.h1`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 400px;
    margin: 0 20px 0 42px;
`;
