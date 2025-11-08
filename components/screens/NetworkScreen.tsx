
import React from 'react';
import { SearchIcon } from '../icons/Icons';
import { User } from '../../types';

const mockConnections: User[] = [
  { name: 'Dr. Aisha Al-Farsi', role: 'Lead Data Scientist', avatarUrl: 'https://picsum.photos/seed/aisha/100/100', company: 'KISR', industry: 'Research' },
  { name: 'John Smith', role: 'Head of Marketing', avatarUrl: 'https://picsum.photos/seed/john/100/100', company: 'Ooredoo', industry: 'Telecom' },
  { name: 'Fatima Khan', role: 'Senior UX Designer', avatarUrl: 'https://picsum.photos/seed/fatima/100/100', company: 'Boutiqaat', industry: 'E-commerce' },
  { name: 'Michael Chen', role: 'Civil Engineer', avatarUrl: 'https://picsum.photos/seed/michael/100/100', company: 'SSH Design', industry: 'Construction' },
  { name: 'Priya Sharma', role: 'Financial Analyst', avatarUrl: 'https://picsum.photos/seed/priya/100/100', company: 'NBK Capital', industry: 'Finance' },
];

const ConnectionCard: React.FC<{ user: User }> = ({ user }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center flex-shrink-0 w-40">
    <img src={user.avatarUrl} alt={user.name} className="w-20 h-20 rounded-full" />
    <h3 className="font-bold text-gray-800 mt-3 text-sm">{user.name}</h3>
    <p className="text-xs text-gray-500 mt-1 truncate">{user.role}</p>
    <p className="text-xs text-gray-500 truncate">{user.company}</p>
    <button className="mt-3 w-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg">Connect</button>
  </div>
);

const NetworkScreen: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <header className="p-4 md:p-6 bg-white sticky top-0 z-10 border-b border-gray-200">
        <h1 className="text-xl text-center font-bold text-gray-800 md:text-2xl md:text-left">Networking Hub</h1>
         <div className="relative mt-2 max-w-lg">
          <input
            type="text"
            placeholder="Search people..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </div>
        </div>
      </header>

      <main className="p-4 md:p-6 space-y-6">
        <section>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-800">Suggested Connections</h3>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-3 -mx-4 px-4 md:mx-0 md:px-0">
            {mockConnections.map(user => <ConnectionCard key={user.name} user={user} />)}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-full">
                <h3 className="font-bold text-gray-800">Mentorship Program</h3>
                <p className="text-sm text-gray-600 mt-1">Connect with experienced professionals.</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                    <button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Find a Mentor</button>
                    <button className="text-sm font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg">Become a Mentor</button>
                </div>
              </div>
            </section>

            <section>
               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-800">Upcoming Professional Events</h3>
                    <p className="text-sm text-gray-600 mt-1">Expand your network and knowledge.</p>
                  </div>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
                </div>
                <div className="mt-3 border-t pt-3">
                    <h4 className="font-semibold text-gray-700">Kuwait Tech Summit 2024</h4>
                    <p className="text-xs text-gray-500">October 28, 2024 | Jumeirah Messilah Beach Hotel</p>
                </div>
              </div>
            </section>
        </div>
      </main>
    </div>
  );
};

export default NetworkScreen;
