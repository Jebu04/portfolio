import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineSolution,
    AiOutlineGithub,
} from 'react-icons/ai';
import { SidebarItem } from '../models/SidebarItem';
import { TiSocialTwitter } from "react-icons/ti";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Tietoa',
        path: '/tiedot',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Kuka olen?',
                path: '/overview/perustietoa',
                icon: <AiOutlineUser />
            },
            {
                title: 'CV',
                path: '/overview/cv',
                icon: <AiOutlineSolution />
            }
        ]
    },
    {
        title: 'Projektit',
        path: '/projektit',
        icon: <AiOutlineGithub />
    },
    {
        title: 'Sosiaaliset mediat',
        path: '/socialmedia',
        icon: <TiSocialTwitter />
    },
];