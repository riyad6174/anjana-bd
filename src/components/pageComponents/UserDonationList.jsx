import { tableCustomStyles } from '@/utils/tableStyle';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { BsDownload } from 'react-icons/bs';

function UserDonationList() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('specialMeal');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const columns = [
    // ... Your existing columns
  ];

  const tabs = [
    { id: 'specialMeal', label: 'Special Meal Sponsor List' },
    { id: 'donation', label: 'Donation List' },
    { id: 'sponsor', label: 'Sponsor List' },
    { id: 'branch', label: 'Branch List' },
  ];

  return (
    <div>
      <div className='overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1'>
        <ul className='flex items-center gap-2 text-sm font-medium'>
          {tabs.map((tab) => (
            <li className='flex-1' key={tab.id}>
              <button
                onClick={() => handleTabChange(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-white text-gray-700 shadow w-full '
                    : 'text-gray-500 hover:bg-white w-full hover:text-gray-700 hover:shadow'
                } relative flex items-center justify-center gap-2 rounded-lg px-3 py-2 focus:outline-none`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='text-center text-xl uppercase text-green-600 py-4'>
        {tabs.find((tab) => tab.id === activeTab)?.label}
      </div>
      <div className=''>
        <DataTable
          data={data}
          customStyles={tableCustomStyles}
          columns={columns}
          pagination
          progressPending={isLoading}
          progressComponent={<Loader />}
        />
      </div>
    </div>
  );
}

export default UserDonationList;

const Loader = () => {
  return (
    <div>
      <div className='flex items-center justify-center space-x-2 my-6'>
        <div className='w-1 h-1 bg-cyan-500 rounded-full animate-ping'></div>
        <div className='w-2 h-2 bg-cyan-300 rounded-full animate-ping'></div>
        <div className='w-3 h-3 bg-cyan-400 rounded-full animate-ping'></div>
        <div className='w-2 h-2 bg-cyan-300 rounded-full animate-ping'></div>
        <div className='w-1 h-1 bg-cyan-500 rounded-full animate-ping'></div>
      </div>
    </div>
  );
};
