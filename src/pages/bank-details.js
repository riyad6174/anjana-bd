import BankCard from '@/components/BankCard';
import MobileBankCard from '@/components/MobileBankCard';
import React from 'react';

function Page() {
  return (
    <div className='py-10'>
      <div className='flex justify-center pb-10 '>
        <div className='flex border justify-center bg-gray-100 text-green-600 uppercase text-sm py-2 px-4 space-x-3'>
          <a href='#' className='hover:border-b-2 hover:border-green-600 '>
            Bank Payment
          </a>
          <a href='#' className='hover:border-b-2 hover:border-green-600 '>
            Mobile Banking
          </a>
          <a href='#' className='hover:border-b-2 hover:border-green-600 '>
            Card Payment
          </a>
        </div>
      </div>
      <div className='text-center text-xl uppercase  text-green-600 '>
        Payment With Bank
      </div>

      <div className='container grid md:grid-cols-2 '>
        <BankCard />
        <BankCard />
      </div>

      <div className='text-center text-xl uppercase  text-green-600 py-10 '>
        Online Banking
      </div>
      <div className='container grid md:grid-cols-2 gap-4  '>
        {mobileBankData.map((mData) => {
          return <MobileBankCard key={mData.id} mData={mData} />;
        })}
      </div>
    </div>
  );
}

export default Page;

const mobileBankData = [
  {
    id: 1,
    title: 'BKASH',
    accountType: 'Merchant',
    accountNo: '01323456789',
    otherInfo: 'Payment Option Pin : 1',
    logo: './assets/bkash.webp',
    color: 'text-pink-500',
  },
  {
    id: 2,
    title: 'NAGAD',
    accountType: 'Merchant ',
    accountNo: '01323456789',
    otherInfo: 'Payment Option Pin : 1',
    logo: './assets/nagad.jpg',
    color: 'text-orange-500',
  },
];
