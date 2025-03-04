import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3;
    display: ${props => props.isOpen ? 'block' : 'none'};
`;
