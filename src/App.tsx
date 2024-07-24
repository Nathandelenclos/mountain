import React from 'react';
import {BurgerMenu, LinkSidebar, Navbar, Overlay, Sidebar} from "./components";
import {Header} from "./components/header/Header.component";

function App() {
    const [sidebarVisible, setSidebarVisible] = React.useState(false);

    return (
        <div className="App">
            <Sidebar
                isVisible={sidebarVisible}
                onClose={() => setSidebarVisible(false)}
                links={[
                    <LinkSidebar href="#">Page 2</LinkSidebar>,
                ]}
            />

            <Overlay
                isVisible={sidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />

            <Navbar
                links={[
                    <BurgerMenu onClick={() => {
                        setSidebarVisible(!sidebarVisible);
                    }}/>,
                ]}
            />

            <Header/>
        </div>
    );
}

export default App;
