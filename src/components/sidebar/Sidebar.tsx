import React, { FC, useEffect } from 'react';
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

    useEffect(() => {
        const screenWidth = window.innerWidth
        if (screenWidth <= 800) return setSidebarIsOpen(false);
        setSidebarIsOpen(true)
    }, [setSidebarIsOpen])

    return (
        <div className={styles.container}>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={styles.nav}>
                    <div className={styles.navicon} onClick={showSidebar}>
                        <AiOutlineMenu />
                    </div>
                </div>
                <div className={styles.sidebarnav} style={sidebarIsOpen ? {left: "0"} : {left: "-100%"}}>
                    <div>
                        <div className={styles.navicon} onClick={showSidebar}>
                            <AiOutlineClose />
                        </div>
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