import styled from "styled-components";

export const Container = styled.div`
    background-color: #292d33;
`;

export const MountainImage = styled.img.attrs({
    src: "https://images03.nicepage.io/c461c07a441a5d220e8feb1a/6d535860c4395ee0ad2365cf/pexelsphoto3389533.jpeg",
    alt: "Mountain"
})`
    top: 0;
    width: 100%;
    height: 500px;
    object-position: 50% 20%;
    overflow: hidden;
    object-fit: cover;
`;

export const Content = styled.div`
    display: flex;
    margin: 0 15%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 0;
    @media (max-width: 768px) {
        margin: 0 10%;
    }
    @media (max-width: 480px) {
        margin: 0 0;
    }
`;

export const CardContainer = styled.div`
    transform: translateY(-200px) !important;
`
