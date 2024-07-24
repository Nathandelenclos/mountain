import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
    height: 100%;
    width: 250px;
    margin-left: ${props => props.isOpen ? '0' : '-250px'};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
`

export const CloseButton = styled.a`
    color: #818181;
    font-size: 50px;
    float: right;
    margin-right: 10px;
`;
