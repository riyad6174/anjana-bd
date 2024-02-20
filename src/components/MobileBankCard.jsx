import React from 'react';

function MobileBankCard({ mData }) {
  return (
    <div>
      <div class='   text-gray-900 py-4'>
        <div className='grid grid-cols-3 '>
          <div className='col-span-1 w-32 h-24 flex items-center justify-center'>
            <img
              src={mData.logo}
              alt=' mobile bank img'
              className=' object-cover  rounded-lg '
            />
          </div>
          <div className='col-span-2 flex flex-col'>
            <h2
              class={`mt-1 text-2xl font-semibold ${mData.color} uppercase leading-tight truncate`}
            >
              {mData.title}
            </h2>
            <h4 class='mt-1 text-sm font-semibold uppercase leading-tight truncate'>
              A/C TYPE : {mData.accountType}
            </h4>
            <h4 class='mt-1 text-sm font-semibold uppercase leading-tight truncate'>
              A/C NO : {mData.accountNo}
            </h4>
            <h4 class='mt-1 text-sm font-semibold uppercase leading-tight truncate'>
              {mData.otherInfo}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBankCard;
