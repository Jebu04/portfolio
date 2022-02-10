import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    sidebarIsOpen: boolean,
    setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: FC<SidebarProps> = ({ sidebarIsOpen, setSidebarIsOpen }) => {
    const showSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

    return (
        <div className={styles.container}>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={styles.nav}>
                    <Link className={styles.navicon} to="#" onClick={showSidebar}>
                        <AiOutlineMenu />
                    </Link>
                </div>
                <div className={styles.sidebarnav} style={sidebarIsOpen ? {left: "0"} : {left: "-100%"}}>
                    <div>
                        <Link className={styles.navicon} to="#" onClick={showSidebar}>
                            <AiOutlineClose />
                        </Link>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />;
                        })}
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default Sidebar;