import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 20%;
    @media (max-width: 768px) {
        margin: 0 10%;
    }
    @media (max-width: 480px) {
        margin: 0 0;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
