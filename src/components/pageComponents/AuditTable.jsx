import { tableCustomStyles } from '@/utils/tableStyle';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { BsDownload } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';

function AuditTable() {
  const [data, setdata] = useState(['2014-2015', '2016-2017', '2018-2019']);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      name: 'SL',
      cell: (row, index) => {
        let num = ++index;

        return num;
      },
    },

    {
      name: 'Year',
      cell: (row) => row,
    },

    {
      name: 'Download PDF',
      cell: (row) => (
        <div className='flex  justify-center gap-5'>
          <button
            // onClick={() => handleRemove(row.id)}
            className='h-8 w-8 bg-violet-100 rounded-full flex items-center justify-center'
          >
            <BsDownload className='text-xl text-violet-500 hover:text-red-400' />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className='text-center text-xl uppercase text-green-600 py-10'>
        Audit Reports
      </div>
      <div className='px-36'>
        <DataTable
          data={data}
          customStyles={tableCustomStyles}
          columns={columns}
          pagination
          progressPending={isLoading}
          progressComponent={<Loader />}
        />
      </div>{' '}
    </div>
  );
}

export default AuditTable;

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
