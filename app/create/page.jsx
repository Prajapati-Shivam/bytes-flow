import Image from 'next/image';
import React from 'react';

const Create = () => {
  return (
    <div className='px-4 py-8 lg:px-8 h-screen'>
      <div className='mt-12 px-20 flex flex-col gap-4'>
        <div className='flex items-center gap-4 text-white relative'>
          <input
            type='text'
            name='prompt'
            id='prompt'
            placeholder='Description of your image'
            className='w-full p-5 rounded-2xl bg-gray-700 outline-none'
          />
          <span className='absolute end-0 pr-4 place-content-center'>
            <button
              type='button'
              className='text-white bg-blue-500 font-bold py-2 px-3 rounded-2xl'
            >
              Create
            </button>
          </span>
        </div>
        <div className='bg-gray-700 w-full p-5 min-h-96 rounded-2xl'>
          <div className='flex items-center justify-center h-full mt-10'>
            <Image
              src='/assets/create_page.svg'
              alt='placeholder'
              width={200}
              height={200}
              className='object-cover rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
