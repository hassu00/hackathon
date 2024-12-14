import Header from './component_header/header'
import Footer from './component_footer/footer'
import Image from 'next/image'

export default function Homepage() {
  return (
    <body className='w-[1440px] h-[3368px] '>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-4'>

        <Header/>
        <div className='flex flex-col'>

        <div id="Hero section" className='col-span-1 lg:col-span-2 '>
          <Image
            src='/images/Hero Blocks.svg'
            alt='Hero Image'
            layout="fill"
            objectFit="cover"
            className='h-[704px] w-screen mt-[130px]'
            />
        </div>

        <div className='w-screen text-center mt-[1200px] justify-center items-center col-span-1 grid grid-rows-1 lg:grid-cols-3 '>
          <div className='flex justify-center items-center'>

          <p className='font-normal text-center px-3 text-[24px] leading-[33.6px]'>What makes our brand different</p>
          </div>
          <div className='bg-green-500'></div>
          <div className='bg-green-500'></div>
          <div className='bg-green-500'></div>
        </div>

            </div>
        <Footer />
      </div>
    </body>
  )
}