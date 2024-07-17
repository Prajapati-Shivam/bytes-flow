import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
    <section className='relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-center sm:text-left'>
          <h1 className='text-3xl font-extrabold text-white sm:text-5xl'>
            <strong className='block font-extrabold text-rose-500'>
              Create and Edit{' '}
            </strong>
            Images with Bytes.
          </h1>

          <p className='mt-4 max-w-lg text-white sm:text-xl/relaxed'>
            Bytes is a simple and easy-to-use image editor that allows you to
            create images with AI and edit images with ease. Get started today
            and start creating beautiful images.
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <Link href='/sign-up'>
              <Button className='px-12 py-3'>Get Started</Button>
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
