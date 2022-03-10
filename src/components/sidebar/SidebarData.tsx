import {
    AiOutlineHome,
    AiOutlineSolution,
    AiOutlineFile,
} from 'react-icons/ai';
import { SidebarItem } from '../../models/SidebarItem';
import { TiMessages } from "react-icons/ti";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />,
    },
    {
        title: 'CV',
        path: '/overview/cv',
        icon: <AiOutlineSolution />
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiOutlineFile />
    },
    {
        title: 'Contact Me',
        path: '/social',
        icon: <TiMessages />
    },
];