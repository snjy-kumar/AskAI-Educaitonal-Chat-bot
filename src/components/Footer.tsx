import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
    {/* <div className="w-full py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 min-[600px]:gap-8]">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Portfolio
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              My Work
            </h1>
            <p className="max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I've worked on some amazing projects. Here are a few of my
              favorites.
            </p>
          </div>
          <div className="grid gap-6 min-[400px]:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-2">
              <Image
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Project 1"
                className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Project 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This is a description of my first project. It was a challenging
                  but rewarding experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Project 2"
                className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Project 2</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This is a description of my second project. I learned a lot
                  while working on this project.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Project 3"
                className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Project 3</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This is a description of my third project. I'm proud of how this
                  project turned out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    
    <div className="w-full py-12 lg:py-24 xl:py-32 ml-8" id='about'>
      <div className="container px-4 md:px-6">
        <div className="flex gap-6 justify-center">
          <div className="space-y-4">
            <div className="space-y-2 flex flex-col justify-center w-full items-center">
              <h2 className="text-3xl font-bold ">About Me</h2>
              <p className=" text-gray-500 px-16 font-medium text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I&apos;m a passionate and creative individual with a love for
                technology. I enjoy solving problems and creating beautiful and
                intuitive user experiences. With a background in computer science
                and years of experience in web development, I have the skills and
                expertise to bring ideas to life.
              </p>
            </div>
            <div className="flex flex-col items-center mb-10 w-full">
              <h3 className="text-2xl underline font-bold mt-4">Skills</h3>
            <div className='flex flex-row mt-4'>
            <ul className="gap-2 text-lg text-gray-400 px-16 list-disc hover:cursor-pointer">
                <li className='py-1 hover:text-white '>JavaScript (ES6+)</li>
                <li className='py-1 hover:text-white '>React.js</li>
                <li className='py-1 hover:text-white '>Node.js</li>
                <li className='py-1 hover:text-white '>HTML5 / CSS3</li>
                <li className='py-1 hover:text-white '>UI/UX Design</li>
            </ul>
            <ul className="gap-2 text-lg text-gray-400 px-16 list-disc hover:cursor-pointer">
            <li className='py-1 hover:text-white '>MongoDB</li>
                <li className='py-1 hover:text-white '>ExpressJS</li>
                <li className='py-1 hover:text-white '>REST Api</li>
                <li className='py-1 hover:text-white '>Git/Github</li>
                <li className='py-1 hover:text-white '>Vercel/Netlify</li>
            </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>




    <div className="w-full  mt-10" id='contact'>
        <div className="flex gap-4 md:gap-8  mx-10 p-10">
          <div className="px-16 w-[40%] flex flex-col ">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-10 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to work together? Send me a message and I&apos;ll
              get back to you as soon as possible.
            </p>
          </div>
          <div className=" flex flex-col w-[50%] lg:max-w-2xl lg:gap-4">
            <div className="pb-0">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="flex h-10 w-[300px] rounded-md border border-input bg-background px-3  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-[300px] rounded-md border border-input bg-background px-3  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3  text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none w-fit bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 hover:bg-white hover:text-black hover:border-primary border border-primary hover:border-primary/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-primary disabled:text-primary-foreground disabled:border-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
    </div>
    <footer className="w-full py-6 bg-transparent border-y text-gray-50 text-center">
        © 2024 My Portfolio. All rights reserved.
      </footer>
  </div>
  )
}

export default Footer