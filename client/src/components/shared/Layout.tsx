import React from "react";
import NavBar from './Navbar';

interface Props{
    children:any
}

const Layout: React.FC<Props>=({children})=>{

    return(
        <div>
            <NavBar/>
            <main>
                {children}
            </main>
        </div>
    )

}

export default Layout