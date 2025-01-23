import { BiHomeAlt2 } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { PiChatCircleBold } from 'react-icons/pi';
import { IoPricetagsOutline } from 'react-icons/io5';

export const menuRoutes = [
  {
    title: 'Home',
    // link: '/',
    path: '/',
    icon: <BiHomeAlt2 />,
  },
  {
    title: 'Profile',
    // link: '/profile',
    path: '/profile',
    icon: <FiSearch />,
  },
  {
    title: 'Category',
    // link: '/category',
    path: '/category',
    icon: <IoPricetagsOutline />,
  },
  {
    title: 'Contacts',
    // link: '/contacts',
    path: '/contacts',
    icon: <PiChatCircleBold />,
  },
];
