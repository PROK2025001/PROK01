
import React from 'react';
import { PlusIcon } from '../icons/Icons';
import { CommunityGroup, CommunityEvent, ForumPost } from '../../types';

const mockGroups: CommunityGroup[] = [
    {id: 1, name: "Kuwait Tech Pros", memberCount: 1250, imageUrl: "https://picsum.photos/seed/tech/200/100"},
    {id: 2, name: "Finance Expats", memberCount: 870, imageUrl: "https://picsum.photos/seed/finance/200/100"},
    {id: 3, name: "Oil & Gas Network", memberCount: 2100, imageUrl: "https://picsum.photos/seed/oil/200/100"},
];

const mockEvents: CommunityEvent[] = [
    {id: 1, title: "Expat Networking Night", date: "Oct 25", time: "7:00 PM"},
    {id: 2, title: "Workshop: Kuwait Labor Law", date: "Nov 5", time: "10:00 AM"},
];

const mockPosts: ForumPost[] = [
    {id: 1, title: "Best way to get a Kuwaiti driving license?", author: "John S.", replyCount: 15},
    {id: 2, title: "Civil ID renewal process for dependents?", author: "Aisha K.", replyCount: 8},
];

const guides = ["Kuwait Labor Law", "Article 18 Visa Process", "Document Attestation Guide"];

const CommunityScreen: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full relative">
      <header className="p-4 md:p-6 bg-white sticky top-0 z-10 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl text-center md:text-left font-bold text-gray-800 md:text-2xl">Community & Resources</h1>
        <button className="hidden md:inline-flex items-center space-x-2 text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-lg">
            <PlusIcon />
            <span>Create Post</span>
        </button>
      </header>

      <main className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
            {/* Interest Groups */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Interest Groups</h3>
              <div className="grid grid-cols-1 gap-4">
                {mockGroups.map(group => (
                  <div key={group.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <img src={group.imageUrl} alt={group.name} className="w-full h-24 object-cover" />
                    <div className="p-3 flex justify-between items-center">
                        <div>
                            <h4 className="font-bold">{group.name}</h4>
                            <p className="text-sm text-gray-500">{group.memberCount.toLocaleString()} members</p>
                        </div>
                        <button className="text-sm font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg">Join</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Visa & Legal Guides */}
            <section>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Visa & Legal Guides</h3>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y">
                    {guides.map(guide => (
                        <div key={guide} className="p-3 text-md font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                            {guide}
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <div className="space-y-6">
            {/* Professional Events */}
            <section>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Professional Events</h3>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y">
                    {mockEvents.map(event => (
                        <div key={event.id} className="p-3 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <div className="text-center bg-gray-100 p-2 rounded-md w-14">
                                    <p className="font-bold text-blue-600">{event.date.split(' ')[0]}</p>
                                    <p className="text-sm">{event.date.split(' ')[1]}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">{event.title}</h4>
                                    <p className="text-sm text-gray-500">{event.time}</p>
                                </div>
                            </div>
                            <button className="text-sm font-semibold text-gray-700 border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg">Details</button>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Ask an Expat Forum */}
            <section>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Ask an Expat Forum</h3>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y">
                    {mockPosts.map(post => (
                         <div key={post.id} className="p-3 hover:bg-gray-50 cursor-pointer">
                            <h4 className="font-semibold">{post.title}</h4>
                            <div className="flex justify-between items-center mt-1">
                                 <p className="text-sm text-gray-500">by {post.author}</p>
                                 <p className="text-sm text-gray-500">{post.replyCount} replies</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
      </main>
      
      <button className="absolute bottom-20 right-4 bg-amber-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 md:hidden">
        <PlusIcon />
      </button>
    </div>
  );
};

export default CommunityScreen;
