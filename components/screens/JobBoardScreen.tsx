import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '../icons/Icons';
import { Job } from '../../types';
import JobDetailsScreen from './JobDetailsScreen';

const mockJobs: Job[] = [
  { id: 1, title: 'Senior Frontend Developer', companyName: 'Kuwait Tech Solutions', companyLogoUrl: 'https://picsum.photos/seed/ktech/50/50', location: 'Kuwait City', visa: 'Article 18 Visa', isFeatured: true, skills: ['React', 'TypeScript', 'TailwindCSS'], description: 'Leading the development of high-quality, responsive web applications for our clients in the financial sector.', responsibilities: ['Develop new user-facing features', 'Build reusable code and libraries for future use', 'Ensure the technical feasibility of UI/UX designs'], requirements: ['5+ years of experience with React', 'Strong proficiency in TypeScript and modern CSS', 'Experience with state management libraries like Redux or Zustand'], industry: 'Technology', experienceLevel: 'Senior', companyDescription: 'Kuwait Tech Solutions is a leading provider of innovative digital solutions, helping businesses in the GCC region to thrive in the digital age.' },
  { id: 2, title: 'Project Manager', companyName: 'Gulf Construction Co.', companyLogoUrl: 'https://picsum.photos/seed/gulf/50/50', location: 'Ahmadi', visa: 'Article 18 Visa', skills: ['PMP', 'Agile', 'Construction'], description: 'Manage large-scale construction projects from inception to completion, ensuring they are delivered on time and within budget.', responsibilities: ['Coordinate internal resources and third parties/vendors', 'Develop project scopes and objectives', 'Track project performance'], requirements: ['Proven working experience in project management', 'Excellent client-facing and internal communication skills', 'PMP certification is a plus'], industry: 'Construction', experienceLevel: 'Mid-level', companyDescription: 'Gulf Construction Co. is one of the largest construction firms in Kuwait, specializing in infrastructure and commercial real estate projects.' },
  { id: 3, title: 'Data Analyst', companyName: 'National Bank of Kuwait', companyLogoUrl: 'https://picsum.photos/seed/nbk/50/50', location: 'Kuwait City', visa: 'Article 18 Visa', skills: ['SQL', 'Python', 'Tableau'], description: 'Interpret data, analyze results using statistical techniques and provide ongoing reports.', responsibilities: ['Acquire data from primary or secondary data sources', 'Identify, analyze, and interpret trends or patterns in complex data sets', 'Work with management to prioritize business needs'], requirements: ['Strong knowledge of and experience with reporting packages (Business Objects etc), databases (SQL etc)', 'Adept at queries, report writing and presenting findings', 'BS in Mathematics, Economics, Computer Science, Information Management or Statistics'], industry: 'Finance', experienceLevel: 'Entry-level', companyDescription: 'The National Bank of Kuwait is the largest financial institution in Kuwait, with a strong presence across the Middle East.' },
  { id:4, title: 'Marketing Specialist', companyName: 'Zain Telecom', companyLogoUrl: 'https://picsum.photos/seed/zain/50/50', location: 'Salmiya', visa: 'Article 22 Visa', skills: ['SEO', 'Social Media', 'Google Analytics'], description: 'Develop and implement marketing strategies to increase brand awareness and drive customer acquisition.', responsibilities: ['Plan and execute all digital marketing, including SEO/SEM, marketing database, email, social media and display advertising campaigns', 'Measure and report performance of all digital marketing campaigns', 'Identify trends and insights, and optimize spend and performance based on the insights'], requirements: ['Proven working experience in digital marketing', 'Demonstrable experience leading and managing SEO/SEM, marketing database, email, social media and/or display advertising campaigns', 'Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate'], industry: 'Telecommunications', experienceLevel: 'Mid-level', companyDescription: 'Zain is a leading mobile telecommunications provider in the Middle East and Africa, offering a comprehensive range of mobile voice and data services.' },
  { id: 5, title: 'HR Business Partner', companyName: 'Alshaya Group', companyLogoUrl: 'https://picsum.photos/seed/alshaya/50/50', location: 'Kuwait City', visa: 'Article 18 Visa', skills: ['Recruitment', 'Employee Relations'], description: 'Act as a strategic partner to the business, developing and implementing HR strategies and initiatives aligned with the overall business strategy.', responsibilities: ['Manage the recruitment and selection process', 'Develop and monitor overall HR strategies, systems, tactics and procedures across the organization', 'Nurture a positive working environment'], requirements: ['Proven working experience as HR Business Partner', 'People oriented and results driven', 'Knowledge of HR systems and databases'], industry: 'Retail', experienceLevel: 'Senior', companyDescription: 'Alshaya Group is a dynamic family-owned enterprise, first established in Kuwait in 1890. With a consistent record of growth and innovation, Alshaya Group is one of the world’s leading brand franchise operators.' },
  { id: 6, title: 'Backend Engineer', companyName: 'Floward', companyLogoUrl: 'https://picsum.photos/seed/floward/50/50', location: 'Kuwait City', visa: 'Article 18 Visa', isFeatured: true, skills: ['PHP', 'Laravel', 'MySQL'], description: 'Responsible for server-side web application logic and integration of the work front-end developers do.', responsibilities: ['Integration of user-facing elements developed by a front-end developer with server side logic', 'Build reusable code and libraries for future use', 'Optimization of the application for maximum speed and scalability'], requirements: ['Proven software development experience in PHP', 'Understanding of open source projects like Joomla, Drupal, Wikis, osCommerce, etc', 'Demonstrable knowledge of web technologies including HTML, CSS, Javascript, AJAX etc'], industry: 'Technology', experienceLevel: 'Mid-level', companyDescription: 'Floward is an online flowers and gifts delivery destination. We pride ourselves in creating a seamless experience for our customers and making sending flowers and gifts as enjoyable as receiving them.' },
  { id: 7, title: 'UX/UI Designer', companyName: 'Boutiqaat', companyLogoUrl: 'https://picsum.photos/seed/boutiqaat/50/50', location: 'Kuwait City', visa: 'Article 22 Visa', skills: ['Figma', 'Adobe XD', 'User Research'], description: 'Design and shape unique, user-centric products and experiences.', responsibilities: ['Gather and evaluate user requirements in collaboration with product managers and engineers', 'Illustrate design ideas using storyboards, process flows and sitemaps', 'Design graphic user interface elements, like menus, tabs and widgets'], requirements: ['Proven work experience as a UI/UX Designer or similar role', 'Portfolio of design projects', 'Up-to-date knowledge of design software like Adobe Illustrator and Photoshop'], industry: 'E-commerce', experienceLevel: 'Mid-level', companyDescription: 'Boutiqaat is the largest online beauty and fashion destination in the Middle East, featuring over 700 international brands and 300 celebrity boutiques.' },
];

const mockSearchTerms = ['React', 'Developer', 'Project Manager', 'SQL', 'Python', 'Marketing', 'HR', 'Backend', 'Designer'];

const JobCard: React.FC<{ job: Job; onSelect: () => void }> = ({ job, onSelect }) => (
  <div onClick={onSelect} className={`bg-white p-4 rounded-lg shadow-sm border ${job.isFeatured ? 'border-amber-400' : 'border-gray-200'} cursor-pointer hover:shadow-md transition-shadow`}>
    {job.isFeatured && <div className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-2">Featured</div>}
    <div className="flex items-start space-x-4">
      <img src={job.companyLogoUrl} alt={job.companyName} className="w-12 h-12 rounded-md mt-1" />
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{job.title}</h3>
        <p className="text-sm text-gray-600">{job.companyName} - {job.location}</p>
        <div className="mt-2 flex flex-wrap gap-2">
            {job.skills.map(skill => <span key={skill} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md">{skill}</span>)}
        </div>
        <div className="mt-3 flex justify-between items-center">
            <p className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full font-semibold">{job.visa}</p>
            <button className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg" onClick={(e) => { e.stopPropagation(); onSelect(); }}>View Details</button>
        </div>
      </div>
    </div>
  </div>
);

const JobBoardScreen: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState({
    industry: 'All',
    experience: 'All',
    visa: 'All',
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = mockSearchTerms.filter(term =>
        term.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };
  
  const industries = ['All', ...Array.from(new Set(mockJobs.map(j => j.industry)))];
  const experiences = ['All', ...Array.from(new Set(mockJobs.map(j => j.experienceLevel)))];
  const visas = ['All', ...Array.from(new Set(mockJobs.map(j => j.visa)))];

  const filteredJobs = mockJobs
    .filter(job => {
      const searchMatch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const industryMatch = filters.industry === 'All' || job.industry === filters.industry;
      const experienceMatch = filters.experience === 'All' || job.experienceLevel === filters.experience;
      const visaMatch = filters.visa === 'All' || job.visa === filters.visa;
      return searchMatch && industryMatch && experienceMatch && visaMatch;
    });

  if (selectedJob) {
    return <JobDetailsScreen job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  const selectClasses = "bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="bg-gray-50 min-h-full">
      <header className="p-4 md:p-6 bg-white sticky top-0 z-10 border-b border-gray-200">
        <h1 className="text-xl text-center font-bold text-gray-800 md:text-2xl md:text-left">Job Board</h1>
        <div className="relative mt-2 max-w-lg" ref={searchRef}>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </div>
          {suggestions.length > 0 && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
              {suggestions.map(suggestion => (
                <div
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="p-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <select name="industry" value={filters.industry} onChange={handleFilterChange} className={selectClasses}>
                {industries.map(opt => <option key={opt} value={opt}>{opt === 'All' ? 'All Industries' : opt}</option>)}
            </select>
            <select name="experience" value={filters.experience} onChange={handleFilterChange} className={selectClasses}>
                {experiences.map(opt => <option key={opt} value={opt}>{opt === 'All' ? 'All Experience Levels' : opt}</option>)}
            </select>
            <select name="visa" value={filters.visa} onChange={handleFilterChange} className={selectClasses}>
                {visas.map(opt => <option key={opt} value={opt}>{opt === 'All' ? 'All Visa Types' : opt}</option>)}
            </select>
        </div>
      </div>

      <main className="p-4 md:px-6 pt-0 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filteredJobs.map(job => <JobCard key={job.id} job={job} onSelect={() => setSelectedJob(job)} />)}
      </main>
    </div>
  );
};

export default JobBoardScreen;