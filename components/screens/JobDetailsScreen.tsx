import React from 'react';
import { Job } from '../../types';
import { ChevronLeftIcon, ShareIcon, ExternalLinkIcon } from '../icons/Icons';

interface JobDetailsScreenProps {
  job: Job;
  onBack: () => void;
}

const JobDetailsScreen: React.FC<JobDetailsScreenProps> = ({ job, onBack }) => {
  const handleShare = () => {
    alert(`Job link for "${job.title}" copied to clipboard!`);
  };

  const handleViewCompany = () => {
    alert(`Navigating to profile for ${job.companyName}...`);
  };

  return (
    <div className="bg-gray-50 min-h-full">
      <header className="p-4 bg-white sticky top-0 z-10 border-b border-gray-200 flex items-center justify-between">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeftIcon />
        </button>
        <h1 className="text-lg font-bold text-gray-800 truncate px-2">{job.title}</h1>
        <button onClick={handleShare} className="p-2 rounded-full hover:bg-gray-100">
          <ShareIcon />
        </button>
      </header>

      <main className="p-4 md:p-6 pb-24">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start space-x-4">
            <img src={job.companyLogoUrl} alt={job.companyName} className="w-16 h-16 rounded-lg mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
              <p className="text-md text-gray-700 font-semibold">{job.companyName}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map(skill => <span key={skill} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{skill}</span>)}
          </div>
          <div className="mt-3">
              <p className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full font-semibold inline-block">{job.visa}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Job Description</h3>
          <p className="text-gray-600 leading-relaxed">{job.description}</p>

          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mt-6 mb-4">Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
          </ul>

          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mt-6 mb-4">Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {job.requirements.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">About {job.companyName}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{job.companyDescription}</p>
            <button 
              onClick={handleViewCompany}
              className="inline-flex items-center text-sm font-bold text-blue-600 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg">
              View Company Profile
              <ExternalLinkIcon />
            </button>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:relative md:bg-transparent md:border-t-0 md:p-0">
         <div className="md:pl-64">
           <button className="w-full text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg">
             Apply Now
           </button>
         </div>
      </footer>
    </div>
  );
};

export default JobDetailsScreen;