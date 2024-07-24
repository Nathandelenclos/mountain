import React from 'react';
import {BurgerMenu, LinkSidebar, Navbar, Sidebar} from "./components";
import {Overlay} from "./components/overlay/Overlay.component";

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

            <Overlay isVisible={sidebarVisible} onClose={() => setSidebarVisible(false)}/>

            <Navbar links={[
                <BurgerMenu onClick={() => {
                    setSidebarVisible(!sidebarVisible);
                }}/>,
            ]}/>
        </div>
    );
}

export default App;
