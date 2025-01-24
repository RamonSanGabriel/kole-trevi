import { BiHomeAlt2 } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { PiChatCircleBold } from 'react-icons/pi';
import { IoPricetagsOutline } from 'react-icons/io5';

export const menuRoutes = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <BiHomeAlt2 />,
  },
  {
    id: 2,
    title: 'Profile',
    path: '/profile',
    icon: <FiSearch />,
  },
  /*  {
    id: 3,
    title: 'Category',
    path: '/category',
    icon: <IoPricetagsOutline />,
  }, */
  {
    id: 4,
    title: 'Contacts',
    path: '/contacts',
    icon: <PiChatCircleBold />,
  },
];
