import React from 'react';
import {AdventureSection, BurgerMenu, Header, LinkSidebar, Navbar, Overlay, Sidebar, WatchWorld} from "./components";

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

            <AdventureSection/>

            <WatchWorld/>
        </div>
    );
}

export default App;
