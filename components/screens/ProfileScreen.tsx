
import React, { useState } from 'react';
import { EditIcon, SettingsIcon, VerifiedIcon } from '../icons/Icons';

type ProfileTab = 'About' | 'Experience' | 'Skills' | 'Saved Jobs';

const ProfileScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('About');
  
  const TABS: ProfileTab[] = ['About', 'Experience', 'Skills', 'Saved Jobs'];

  const renderContent = () => {
    switch(activeTab) {
      case 'About':
        return <p className="text-gray-600 leading-relaxed">Dynamic and results-oriented Senior Frontend Developer with over 8 years of experience building and maintaining responsive web applications. Passionate about creating intuitive user experiences and leveraging modern technologies to drive business growth. Currently seeking new opportunities in Kuwait's thriving tech sector.</p>;
      case 'Experience':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Senior Frontend Developer</h4>
              <p className="text-sm font-medium text-gray-700">Tech Innovators Inc.</p>
              <p className="text-sm text-gray-500">2019 - Present</p>
            </div>
            <div>
              <h4 className="font-bold">Frontend Developer</h4>
              <p className="text-sm font-medium text-gray-700">Digital Solutions</p>
              <p className="text-sm text-gray-500">2016 - 2019</p>
            </div>
          </div>
        );
      case 'Skills':
        const skills = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'Agile Methodologies', 'UI/UX Design'];
        return (
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        );
      case 'Saved Jobs':
         return <p className="text-gray-600">You have 3 saved jobs.</p>;
    }
  }

  return (
    <div className="bg-white min-h-full">
      <div className="max-w-5xl mx-auto">
        <header className="relative">
          <img src="https://picsum.photos/seed/cover/1200/300" alt="Cover" className="w-full h-32 md:h-48 object-cover" />
          <div className="absolute top-4 right-4 flex space-x-2">
              <button className="bg-white/70 p-2 rounded-full text-gray-800 hover:bg-white"><EditIcon/></button>
              <button className="bg-white/70 p-2 rounded-full text-gray-800 hover:bg-white"><SettingsIcon/></button>
          </div>
          <div className="absolute top-16 md:top-28 left-4 md:left-6">
            <img src="https://picsum.photos/seed/myprofile/100/100" alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md" />
          </div>
        </header>

        <main className="pt-16 md:pt-20 px-4 md:px-6 pb-4">
          <div className="flex items-center space-x-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">James Anderson</h1>
              <VerifiedIcon/>
          </div>
          <p className="text-md text-gray-700">Senior Frontend Developer at Tech Innovators Inc.</p>
          <p className="text-sm text-gray-500 mt-1">Kuwait City, Kuwait | 8+ Years of Experience | American</p>
          
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="font-semibold text-amber-800">Mentorship Status</h3>
              <p className="text-sm text-amber-700">Offering Mentorship in Frontend Development</p>
          </div>

          <div className="mt-6 border-b border-gray-200">
            <nav className="flex -mb-px space-x-6">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 text-sm font-semibold transition-colors duration-200 ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="mt-4 min-h-[200px]">
              {renderContent()}
          </div>

        </main>
      </div>
    </div>
  );
};

export default ProfileScreen;
