import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
    <section className='relative bg-[url(/assets/hero_image.png)] bg-cover h-screen bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900 sm:to-gray-900/25 sm:bg-gradient-to-r'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 flex justify-center sm:justify-start h-screen items-center sm:px-8 lg:px-20'>
        <div className='max-w-xl text-center sm:text-left'>
          <h1 className='fade-up-1 text-3xl font-extrabold text-white sm:text-5xl'>
            <strong className='block font-extrabold text-gray-400'>
              Create and Edit{' '}
            </strong>
            Images with Bytes.
          </h1>

          <p className='fade-up-2 mt-4 max-w-lg text-white sm:text-xl/relaxed'>
            Bytes is a simple and easy-to-use image editor that allows you to
            create images with AI and edit images with ease. Get started today
            and start creating beautiful images.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row gap-4 text-center'>
            <Link href='/create'>
              <Button className='px-12 py-3 border-2 hover:border-gray-400'>
                Get Started
              </Button>
            </Link>
            <Link href='/'>
              <Button className='py-3 text-white' variant='link'>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
