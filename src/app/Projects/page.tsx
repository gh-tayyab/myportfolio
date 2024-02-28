import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto relative top-20'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mt-5'>Projects</h1>
        <p className='pt-6 text-neutral-300'>
            Over the years, I have gained experience in designing and developing a variety of websites, ranging from simple one-page landing pages to complex multi page application. Here are some projects are given below
        </p>
        <div className='mt-20 md:w-9/12 mx-auto'>
            <img className='rounded-xl opacity-95 hover:opacity-100' src="template.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Landing Page</h1>
                <p className='text-neutral-300'>A landing page for designers made with basic html, css with great color combination.</p>
                <div className='mt-6 inline-block'>
                    <a href="" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600'>
                        Explore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </a>
                </div>





                <div className='mt-20 md:w-110/120 mx-auto'>
            <img className='rounded-xl opacity-95 hover:opacity-100 w-full h-full' src="template1.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Next.js: Education Website</h1>
                <p className='text-neutral-300'>A news website using the Next.js framework, which continuosly provides the latest updates and discussion from around the world.  <br /><br />
                This dynamic platform utilizes real-time data fetching from the Yahoo News API, ensuring that users are constantly informed  with up-to-date news content.</p>
                <div className='mt-6 inline-block'>
                    <a href="" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600'>
                        Explore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </a>
                </div>



                <div className='mt-20 md:w-110/120 mx-auto'>
            <img className='rounded-xl opacity-95 hover:opacity-100' src="template2.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Free Online Course</h1>
                <p className='text-neutral-300'>The Free Online Course website is built with Next.js and utilizes Tailwind CSS for styling. It integrates MongoDB for database management and Prisma Cloudinary for efficient image storage. <br /><br />
                This combination of technologies enables seamless and user-friendly Online Courses experience, delivering a robust and visually appealing application.</p>
                <div className='mt-6 inline-block'>
                    <a href="" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-600'>
                        Explore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </a>
                
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Projects