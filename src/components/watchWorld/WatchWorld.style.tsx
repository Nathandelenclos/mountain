import styled from "styled-components";

export const Container = styled.section`
    background-color: #292d33;
    display: flex;
    justify-content: center;

    flex-direction: row;
    padding: 100px 20%;
    gap: 40px;
    @media (max-width: 768px) {
        padding: 0 10%;
        flex-wrap: wrap;
    }
    @media (max-width: 480px) {
        padding: 0 0;
        flex-wrap: wrap;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;

    margin: 60px 0;
    width: 50%;
    gap: 40px;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const MountainImage1 = styled.img.attrs({
    src: "mountain1.jpg",
    alt: "Mountain 1"
})`
    width: 377px;
    height: 335px;
    object-position: 50% 20%;
    overflow: hidden;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const MountainImage2 = styled.img.attrs({
    src: "mountain2.jpg",
    alt: "Mountain 2"
})`
    height: 405px;
    width: 300px;
    object-position: 50% 20%;
    overflow: hidden;
    object-fit: cover;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const MountainImage3 = styled.img.attrs({
    src: "https://images03.nicepage.io/c461c07a441a5d220e8feb1a/6d535860c4395ee0ad2365cf/pexelsphoto3389533.jpeg",
    alt: "Mountain 3"
})`
    height: 570px;
    object-position: 50% 20%;
    overflow: hidden;
    object-fit: cover;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DescriptionContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
`;

export const Description = styled.p`
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 20px 0 0 0;
`;
