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
        title: 'Home',
        path: '/intro',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Information',
                path: '/overview/info',
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
        title: 'Projects',
        path: '/projects',
        icon: <AiOutlineGithub />
    },
    {
        title: 'Contact me',
        path: '/social',
        icon: <TiSocialTwitter />
    },
];