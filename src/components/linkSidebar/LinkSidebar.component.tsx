import React from 'react';
import {Link} from "./LinkSidebar.style";

type LinkSidebarProps = {
    href?: string;
    children?: React.ReactNode;
}

const LinkSidebarComponent = ({children, href}: LinkSidebarProps) => {
    return (
        <Link href={href}>{children}</Link>
    );
}

export const LinkSidebar = LinkSidebarComponent;
