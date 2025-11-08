
import React from 'react';
import { Screen } from '../../types';
import { HomeIcon, BriefcaseIcon, UsersIcon, MessageSquareIcon, UserIcon } from '../icons/Icons';
import { Logo } from './Logo';

interface SideNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const NavItem: React.FC<{
  label: Screen;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const baseClasses = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer";
  const activeClasses = "bg-blue-100 text-blue-700 font-bold";
  const inactiveClasses = "text-gray-600 hover:bg-gray-100";

  return (
    <li
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span>{label}</span>
    </li>
  );
};

const SideNav: React.FC<SideNavProps> = ({ activeScreen, setActiveScreen }) => {
    const navItems = [
        { label: Screen.Home, icon: <HomeIcon /> },
        { label: Screen.Jobs, icon: <BriefcaseIcon /> },
        { label: Screen.Network, icon: <UsersIcon /> },
        { label: Screen.Community, icon: <MessageSquareIcon /> },
        { label: Screen.Profile, icon: <UserIcon /> },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4 shrink-0">
            <div className="mb-8 px-2">
                <Logo />
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            isActive={activeScreen === item.label}
                            onClick={() => setActiveScreen(item.label)}
                        />
                    ))}
                </ul>
            </nav>
            <div className="mt-auto">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <img src="https://picsum.photos/seed/myprofile/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold text-sm">James Anderson</p>
                        <p className="text-xs text-gray-500">View Profile</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideNav;
