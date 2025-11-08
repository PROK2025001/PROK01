

import React from 'react';
import { BellIcon, SearchIcon, FilterIcon } from '../icons/Icons';
import { Job, User } from '../../types';

// FIX: Added missing properties 'industry', 'experienceLevel', and 'companyDescription' to conform to the Job interface.
const mockJobs: Job[] = [
  { id: 1, title: 'Senior Frontend Developer', companyName: 'Kuwait Tech Solutions', companyLogoUrl: 'https://picsum.photos/seed/ktech/50/50', location: 'Kuwait City', visa: 'Article 18 Visa', skills: [], description: '', responsibilities: [], requirements: [], industry: 'Technology', experienceLevel: 'Senior', companyDescription: 'Kuwait Tech Solutions is a leading provider of innovative digital solutions, helping businesses in the GCC region to thrive in the digital age.' },
  { id: 2, title: 'Project Manager', companyName: 'Gulf Construction Co.', companyLogoUrl: 'https://picsum.photos/seed/gulf/50/50', location: 'Ahmadi', visa: 'Article 18 Visa', skills: [], description: '', responsibilities: [], requirements: [], industry: 'Construction', experienceLevel: 'Mid-level', companyDescription: 'Gulf Construction Co. is one of the largest construction firms in Kuwait, specializing in infrastructure and commercial real estate projects.' },
];

const mockConnections: User[] = [
  { name: 'Dr. Aisha Al-Farsi', role: 'Lead Data Scientist', avatarUrl: 'https://picsum.photos/seed/aisha/100/100' },
  { name: 'John Smith', role: 'Head of Marketing', avatarUrl: 'https://picsum.photos/seed/john/100/100' },
  { name: 'Fatima Khan', role: 'Senior UX Designer', avatarUrl: 'https://picsum.photos/seed/fatima/100/100' },
];

const mockResources = [
    { title: 'Visa Guides' },
    { title: 'Interest Groups' },
    { title: 'Event Calendar' }
]

const HomeScreen: React.FC = () => {
  const date = new Date();
  const dateString = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-white sticky top-0 z-10 border-b border-gray-100 md:hidden">
        <div>
          <h1 className="text-xl font-bold text-blue-800">PROK</h1>
          <p className="text-xs text-gray-500">{dateString}</p>
        </div>
        <div className="flex items-center space-x-4">
          <BellIcon />
          <img src="https://picsum.photos/seed/myprofile/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </header>
       <header className="hidden md:flex justify-between items-center p-6 bg-white border-b border-gray-200">
         <div>
            <h1 className="text-2xl font-bold">Good Morning, James</h1>
            <p className="text-md text-gray-500">{dateString}</p>
         </div>
         <div className="flex items-center space-x-4">
          <BellIcon />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-48 md:h-56 bg-gray-800 text-white flex items-center justify-center">
        <img src="https://picsum.photos/seed/kuwait/1200/400" alt="Kuwait skyline" className="absolute w-full h-full object-cover opacity-30" />
        <div className="z-10 text-center p-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">Unlock Your Kuwait Career</h2>
          <p className="mt-1 text-sm md:text-base font-light">Your professional journey starts here.</p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="p-4 bg-white border-b border-gray-100">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search Jobs & Connections"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </div>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
            <FilterIcon/>
          </button>
        </div>
      </div>

      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Targeted Job Board */}
        <section className="lg:col-span-1">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-800">Targeted Job Board</h3>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
          </div>
          <div className="space-y-3">
            {mockJobs.map(job => (
              <div key={job.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
                <img src={job.companyLogoUrl} alt={job.companyName} className="w-12 h-12 rounded-md" />
                <div className="flex-1">
                  <h4 className="font-bold">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.companyName}</p>
                  <p className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-1">{job.visa}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Networking Hub */}
        <section className="lg:col-span-1">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-800">Networking Hub</h3>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">Connect</a>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {mockConnections.map(user => (
              <div key={user.name} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full mx-auto" />
                <h4 className="text-sm font-semibold mt-2 truncate">{user.name}</h4>
                <p className="text-xs text-gray-500 truncate">{user.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community & Resources */}
        <section className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Community & Resources</h3>
            <div className="grid grid-cols-1 gap-3">
                {mockResources.map(resource => (
                    <div key={resource.title} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center font-semibold text-gray-700 hover:bg-blue-50 cursor-pointer">
                        {resource.title}
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;