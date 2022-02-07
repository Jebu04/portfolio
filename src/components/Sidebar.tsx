import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import styles from './Sidebar.module.scss';


const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className={styles.container}>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={styles.nav}>
                    <Link className={styles.navicon} to="#" onClick={showSidebar}>
                        <AiOutlineMenu />
                    </Link>
                </div>
                <div className={styles.sidebarnav} style={sidebar ? {left: "0"} : {left: "-100%"}}>
                    <SidebarWrap>
                        <Link className={styles.navicon} to="#" onClick={showSidebar}>
                            <AiOutlineClose />
                        </Link>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default Sidebar;