import React from 'react'
import '../App.css';
import { SideberData } from './SidebarData';


function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList"> {
            SideberData.map((val, key)=> {
                return(
                    <li key={key}
                    className="row"
                    onClick={() => {
                        window.location.pathname = val.link;
                    }}
                    >
                        <div id="icon">
                            {val.icon}
                        </div>
                        <div id="title">
                            {val.title}
                        </div>
                    </li>
                );
            })
        }
             </ul>
        </div>
    );
}

export default Sidebar;