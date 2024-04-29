import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const MyForm = () => {
  const [rows, setRows] = useState([
    { date: '', branch: '', menuItem: '', quantity: 0, subtotal: 0 },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleAddMore = () => {
    setRows([
      ...rows,
      { date: '', branch: '', menuItem: '', quantity: 0, subtotal: 0 },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <>
      <div className='pt-4'>
        <img
          src='./assets/hands.webp'
          alt='child'
          className='h-64 w-full object-cover grayscale '
        />
      </div>
      <div className='container pb-20'>
        <div className='text-green-600 text-left uppercase font-bold text-xl'>
          <p className=' block py-4'>Special Meal</p>
        </div>
        <form>
          <table className='min-w-full border '>
            <thead>
              <tr className='bg-green-600 text-white uppercase text-sm  '>
                <th className='py-2 font-thin'>Date</th>
                <th className='py-2 font-thin'>Branch</th>
                <th className=' py-2 font-thin'>Menu Item</th>
                <th className=' py-2 font-thin'>Quantity</th>
                <th className='py-2 font-thin'>Subtotal</th>
                <th className='py-2 font-thin'>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className='text-center '>
                  <td className='py-2'>
                    <input
                      type='date'
                      value={row.date}
                      onChange={(e) =>
                        handleInputChange(index, 'date', e.target.value)
                      }
                      className='border p-2 text-sm'
                    />
                  </td>
                  <td>
                    <select
                      value={row.branch}
                      onChange={(e) =>
                        handleInputChange(index, 'branch', e.target.value)
                      }
                      className='border p-2 text-sm '
                    >
                      {/* Add your branch options here */}
                      <option>Dhaka Branch</option>
                    </select>
                  </td>
                  <td>
                    <select
                      value={row.menuItem}
                      onChange={(e) =>
                        handleInputChange(index, 'menuItem', e.target.value)
                      }
                      className='border p-2 text-sm'
                    >
                      {/* Add your menu item options here */}
                      <option>Fish + Rice + egg</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type='number'
                      value={row.quantity}
                      onChange={(e) =>
                        handleInputChange(index, 'quantity', e.target.value)
                      }
                      className='border p-2 text-sm'
                    />
                  </td>
                  <td>
                    <input
                      type='text'
                      value={row.subtotal}
                      onChange={(e) =>
                        handleInputChange(index, 'subtotal', e.target.value)
                      }
                      className='border p-2 text-sm'
                    />
                  </td>
                  <td>
                    <button
                      type='button'
                      onClick={() => handleRemoveRow(index)}
                      className='text-white p-2 rounded-full text-sm bg-red-500'
                    >
                      <MdClose className='text-lg' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='mt-4 text-center'>
            <button
              type='button'
              onClick={handleAddMore}
              className='bg-green-600 hover:bg-secondary text-white px-4 py-2 text-sm uppercase'
            >
              Add More
            </button>
          </div>

          <div className='mt-4'>
            {/* Message field */}
            <textarea
              className='w-full p-2 border border-gray-300'
              placeholder='Your message here'
            ></textarea>
          </div>
        </form>
        <div>
          <div class='mx-auto w-full max-w-[550px] pt-10'>
            <div class='-mx-3 flex flex-wrap'>
              <div class='w-full px-3 sm:w-1/2'>
                <div class='mb-5'>
                  <label for='fName' class='mb-3 block text-sm  text-[#07074D]'>
                    Total Quantity
                  </label>
                  <input
                    type='text'
                    name='fName'
                    id='fName'
                    placeholder='Total Quantity'
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
              </div>
              <div class='w-full px-3 sm:w-1/2'>
                <div class='mb-5'>
                  <label for='lName' class='mb-3 block text-sm  text-[#07074D]'>
                    Total Amount
                  </label>
                  <input
                    type='text'
                    name='lName'
                    id='lName'
                    placeholder='Total Amount'
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
              </div>
            </div>

            <div class='mb-5'>
              <div class='flex items-center space-x-6'>
                <div class='flex items-center'>
                  <input
                    type='checkbox'
                    name='radio1'
                    id='radioButton1'
                    class='h-5 w-5'
                  />
                  <label
                    for='radioButton1'
                    class='pl-3 text-sm font-medium text-[#07074D]'
                  >
                    I WANT TO PROVIDE MY INFORMATION
                  </label>
                </div>
              </div>
            </div>

            <div className='text-center '>
              <button class='text-center hover:shadow-form rounded-md bg-green-600 hover:bg-secondary py-3 px-8 text-base font-semibold text-white outline-none'>
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyForm;
