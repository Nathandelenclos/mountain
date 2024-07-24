import React from "react";

type BurgerMenuProps = {
    size?: number;
    color?: string;
    onClick?: () => void;
}

const BurgerMenuComponent = ({
                                 size = 40,
                                 color = '#999999',
                                 onClick,
                             }: BurgerMenuProps) => {
    return (
        <div onClick={onClick}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke={color} stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke={color} stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke={color} stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
    );
}

export const BurgerMenu = BurgerMenuComponent;
