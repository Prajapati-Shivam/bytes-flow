import Image from 'next/image';
import React from 'react';
const Explore = () => {
  const images = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8',
    'img9',
    'img10',
  ];

  return (
    <div className='px-4 sm:px-8 py-8 lg:px-20 h-screen'>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {images.map((image, index) => (
          <div className='group relative block' key={index}>
            <Image
              alt={image}
              src={`/assets/output_img/${image}.jpg`}
              width={300}
              height={300}
              className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl'
            />
            <div className='relative p-4 sm:p-6'>
              <div className='mt-32 sm:mt-48 lg:mt-64'>
                <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                  <p className='text-sm text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
