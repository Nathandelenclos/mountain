import React from "react";
import {Container, Logo} from "./Navbar.style";

type NavbarProps = {
    links?: React.ReactNode[];
};

const NavbarComponent = ({links}: NavbarProps) => {
    return (
        <Container>
            <Logo />
            {links && links.map((link, index) => (
                <div key={index}>{link}</div>
            ))}
        </Container>
    );
}

export const Navbar = NavbarComponent;
