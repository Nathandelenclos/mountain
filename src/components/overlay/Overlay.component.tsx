import React from 'react';
import {Container} from "./Overlay.style";

type OverlayProps = {
    isVisible: boolean;
    onClose?: () => void;
};

const OverlayComponent = ({isVisible, onClose}: OverlayProps) => {
    return (
        <Container isOpen={isVisible} onClick={() => {
            onClose && onClose();
        }}/>
    );
}

export const Overlay = OverlayComponent;
