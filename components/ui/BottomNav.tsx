
import React from 'react';
import { Screen } from '../../types';
import { HomeIcon, BriefcaseIcon, UsersIcon, MessageSquareIcon, UserIcon } from '../icons/Icons';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const NavItem: React.FC<{
  label: Screen;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeColor = 'text-blue-600';
  const inactiveColor = 'text-gray-400 hover:text-blue-500';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? activeColor : inactiveColor}`}
    >
      {icon}
      <span className={`text-xs mt-1 font-medium ${isActive ? 'font-bold' : ''}`}>{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { label: Screen.Home, icon: <HomeIcon /> },
    { label: Screen.Jobs, icon: <BriefcaseIcon /> },
    { label: Screen.Network, icon: <UsersIcon /> },
    { label: Screen.Community, icon: <MessageSquareIcon /> },
    { label: Screen.Profile, icon: <UserIcon /> },
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around shadow-inner md:hidden">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          isActive={activeScreen === item.label}
          onClick={() => setActiveScreen(item.label)}
        />
      ))}
    </nav>
  );
};

export default BottomNav;
