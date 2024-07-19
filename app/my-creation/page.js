'use client';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const MyCreaciton = () => {
  const { user } = useUser();
  return (
    <div className='px-4 sm:px-8 py-8 lg:px-20 h-screen'>
      <div className='mt-10 text-white'>
        <div className='py-6 border-b-2 flex items-center justify-center'>
          <div className='flex flex-col sm:flex-row text-center sm:text-start items-center gap-4'>
            <Image
              src={user?.imageUrl}
              alt='avatar'
              width={100}
              height={100}
              className='rounded-full'
            />
            <div>
              <h1 className='text-2xl font-bold'>{user?.fullName}</h1>
              <p className='text-gray-400 text-sm py-2'>
                {user?.primaryEmailAddress.emailAddress}
              </p>
              <div className='flex gap-x-4 text-gray-400 text-sm'>
                <span>O Followers</span>
                <span>O Following</span>
                <span>O Likes</span>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4 flex flex-col gap-4'>
          <h2 className='text-gray-400 font-semibold text-xl'>My Images</h2>
          <div className='bg-gray-700 w-full p-5 min-h-80 rounded-2xl text-center'>
            No images
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCreaciton;
