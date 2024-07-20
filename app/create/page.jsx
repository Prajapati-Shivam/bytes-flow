'use client';
import { resultImage } from '@/lib/img_utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

const Create = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultImg, setResultImg] = useState(null);
  const [credits, setCredits] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCredits(3);
    }, 3600000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!prompt) return;
      if (credits <= 0) {
        toast.error(
          'You have exhausted your credits. Please try after an hour'
        );
        return;
      }
      setLoading(true);
      try {
        const img = resultImage();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setResultImg(img);
        setPrompt('');
        setCredits((prev) => prev - 1);
        toast.success(
          `Image created successfully. You have ${credits - 1} credits left`
        );
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong!');
      } finally {
        setLoading(false);
      }
    },
    [prompt, credits]
  );

  return (
    <div className='px-4 sm:px-8 py-8 lg:px-20 h-screen'>
      <div className='grid pt-12 pb-10 min-h-[100vh] grid-rows-[1fr_auto] gap-4'>
        <div className='bg-gray-700 w-full p-5 h-full rounded-2xl'>
          {resultImg == null ? (
            <div className='flex items-center justify-center h-full mt-10'>
              <Image
                src='/assets/create_page.svg'
                alt='placeholder'
                width={200}
                height={200}
                priority
              />
            </div>
          ) : (
            <div className='flex items-center justify-center h-full mt-8'>
              <Image
                src={resultImg}
                alt='result'
                width={400}
                height={400}
                priority
                className='rounded-2xl'
              />
            </div>
          )}
        </div>
        <div className='hidden sm:flex items-center gap-4 text-white relative'>
          <input
            type='text'
            name='prompt'
            id='prompt'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Description of your image'
            className='w-full p-5 rounded-2xl bg-gray-700 outline-none'
          />
          <span className='absolute end-0 pr-4 place-content-center'>
            <button
              onClick={handleSubmit}
              disabled={!prompt || loading}
              className={`text-white bg-blue-500 font-bold py-2 px-3 rounded-2xl ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <div className='flex items-center gap-2'>
                  <Loader2 size={24} className='animate-spin' />
                  <span>Creating...</span>
                </div>
              ) : (
                'Create'
              )}
            </button>
          </span>
        </div>
        <div className='sm:hidden flex flex-col items-center gap-4 text-white relative'>
          <textarea
            type='text'
            name='prompt'
            id='prompt'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Description of your image'
            className='w-full p-5 rounded-2xl bg-gray-700 outline-none'
          />
          <button
            onClick={handleSubmit}
            disabled={!prompt || loading}
            className={`text-white bg-blue-500 font-bold py-2 px-3 w-full rounded-2xl ${
              loading ? 'opacity-80 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <div className='flex items-center gap-2'>
                <Loader2 size={24} className='animate-spin' />
                <span>Creating...</span>
              </div>
            ) : (
              'Create'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
