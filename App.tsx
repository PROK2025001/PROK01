
import React, { useState } from 'react';
import { Screen } from './types';
import HomeScreen from './components/screens/HomeScreen';
import JobBoardScreen from './components/screens/JobBoardScreen';
import NetworkScreen from './components/screens/NetworkScreen';
import CommunityScreen from './components/screens/CommunityScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import BottomNav from './components/ui/BottomNav';
import SideNav from './components/ui/SideNav';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home);

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.Home:
        return <HomeScreen />;
      case Screen.Jobs:
        return <JobBoardScreen />;
      case Screen.Network:
        return <NetworkScreen />;
      case Screen.Community:
        return <CommunityScreen />;
      case Screen.Profile:
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 font-sans text-gray-800 flex">
      <SideNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* The main content area where the screen is rendered */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {renderScreen()}
        </main>
      </div>
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default App;
