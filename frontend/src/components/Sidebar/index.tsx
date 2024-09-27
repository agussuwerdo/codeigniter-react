import { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faCalendarAlt,
  faUser,
  faEdit,
  faTable,
  faCog,
  faChartBar,
  faLayerGroup,
  faLock,
  faCube,
  faTh,
  faBell,
  faHandPointer,
  faSignInAlt,
  faUserPlus,
  faTree,
  faListOl,
} from '@fortawesome/free-solid-svg-icons';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/logo.svg';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition

interface ChildMenuItem {
  id: number;
  title: string;
  path: string;
  icon: IconDefinition;
}

interface MenuItem {
  tag?: string;
  id: number;
  title: string;
  path: string;
  icon: IconDefinition;
  children: ChildMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    icon: faTachometerAlt,
    children: [],
    tag: 'MENU',
  },
  {
    id: 2,
    title: 'Calendar',
    path: '/calendar',
    icon: faCalendarAlt,
    children: [],
    tag: 'MENU',
  },
  {
    id: 3,
    title: 'Profile',
    path: '/profile',
    icon: faUser,
    children: [],
    tag: 'MENU',
  },
  {
    id: 4,
    title: 'Forms',
    path: '/forms',
    icon: faEdit,
    children: [
      {
        id: 4.1,
        title: 'Form Elements',
        path: '/forms/form-elements',
        icon: faCube,
      },
      {
        id: 4.2,
        title: 'Form Layout',
        path: '/forms/form-layout',
        icon: faTh,
      },
    ],
    tag: 'MENU',
  },
  {
    id: 5,
    title: 'Tables',
    path: '/tables',
    icon: faTable,
    children: [],
    tag: 'MENU',
  },
  {
    id: 6,
    title: 'Settings',
    path: '/settings',
    icon: faCog,
    children: [],
    tag: 'OTHERS',
  },
  {
    id: 7,
    title: 'Chart',
    path: '/chart',
    icon: faChartBar,
    children: [],
    tag: 'OTHERS',
  },
  {
    id: 8,
    title: 'UI Elements',
    path: '/ui/',
    icon: faLayerGroup,
    children: [
      {
        id: 8.1,
        title: 'Alerts',
        path: '/ui/alerts',
        icon: faBell,
      },
      {
        id: 8.2,
        title: 'Buttons',
        path: '/ui/buttons',
        icon: faHandPointer,
      },
    ],
    tag: 'OTHERS',
  },
  {
    id: 9,
    title: 'Authentication',
    path: '/auth/',
    icon: faLock,
    children: [
      {
        id: 9.1,
        title: 'Sign In',
        path: '/auth/signin',
        icon: faSignInAlt,
      },
      {
        id: 9.2,
        title: 'Sign Up',
        path: '/auth/signup',
        icon: faUserPlus,
      },
    ],
  },
  {
    id: 10,
    title: 'Tree',
    path: '/tree',
    icon: faTree,
    children: [],
  },
  {
    id: 11,
    title: 'Products',
    path: '/products',
    icon: faListOl,
    children: [],
  },
];

// SidebarProps interface
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const groupedMenuItems = groupByTag(menuItems);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-1 py-4 px-4 lg:px-6 gap-2.5 list-none">
          {Object.entries(groupedMenuItems).map(
            ([tag, items]: [string, MenuItem[]]) => (
              <div key={tag} className="gap-2 flex flex-col">
                {tag && (
                  <h3 className="mt-2 mb-2 ml-4 text-sm font-semibold text-bodydark2">
                    {tag}
                  </h3>
                )}
                {items.map((item, index) => {
                  const activeCondition =
                    item.path === '/'
                      ? pathname === '/'
                      : pathname.includes(item.path);
                  return (
                    <SidebarLinkGroup
                      key={index}
                      activeCondition={
                        pathname === item.path || pathname.startsWith(item.path)
                      }
                    >
                      {(handleClick, open) => (
                        <div>
                          <NavLink
                            to={item.children.length ? '#' : item.path}
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                              activeCondition
                                ? 'bg-graydark dark:bg-meta-4'
                                : ''
                            }`}
                            onClick={(e) => {
                              if (item.children.length) {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={item.icon} />
                            {item.title}
                            {item.children.length > 0 && (
                              <svg
                                className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                  open && 'rotate-180'
                                }`}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                  fill=""
                                />
                              </svg>
                            )}
                          </NavLink>
                          {item.children.length > 0 && (
                            <div
                              className={`translate transform overflow-hidden ${
                                !open && 'hidden'
                              }`}
                            >
                              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6 list-none">
                                {item.children.map((child, idx) => (
                                  <li key={idx}>
                                    <NavLink
                                      to={child.path}
                                      className={({ isActive }) =>
                                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                        (isActive ? '!text-white' : '')
                                      }
                                    >
                                      {child.title}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </SidebarLinkGroup>
                  );
                })}
              </div>
            ),
          )}
        </nav>
      </div>
    </aside>
  );
};

const groupByTag = (items: MenuItem[]): Record<string, MenuItem[]> => {
  return items.reduce<Record<string, MenuItem[]>>((result, item) => {
    const tag = item.tag || ''; // Default to 'Others' if no tag is provided
    (result[tag] = result[tag] || []).push(item);
    return result;
  }, {});
};

export default Sidebar;
