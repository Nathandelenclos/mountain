import React from "react";
import {CloseButton, Container, LinksContainer} from "./Sidebar.style";

type SidebarProps = {
    links?: React.ReactNode[];
    isVisible: boolean;
    onClose?: () => void;
};

const SidebarComponent = ({links, isVisible, onClose}: SidebarProps) => {

    return (
        <Container isOpen={isVisible}>
            <CloseButton onClick={() => {
                onClose && onClose();
            }}>&times;</CloseButton>
            <LinksContainer>
                {links && links.map((link, index) => (
                    <div key={index}>{link}</div>
                ))}
            </LinksContainer>
        </Container>
    );
}

export const Sidebar = SidebarComponent;
