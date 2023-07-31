import React from 'react'
import { useEffect, useState } from 'react'

function About() {

  useEffect(() => {
    setInterval(() => {
      document.getElementById('slider').scrollLeft += 4
    }, 100)
  }, [])

  return (
    <div className='bg-[#040404] text-white h-screen py-24 overflow-x-hidden flex flex-col'>

      <div className='w-full max-w-[1300px] mx-auto mb-14'>
        <a href='/' className='relative text-white text-xl rounded-full bg-[#0e0e0e] h-14 w-24 flex items-center justify-center'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
        </a>
      </div>

      {/* <div id='slider' className='flex flex-row gap-10 overflow-x-hidden h-[400px] min-h-[400px] w-full scroll-smooth  mr-20'>
        <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
        <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
        <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
        <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
        <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
        <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
        <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
        <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
        <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
        <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
      </div> */}
      
      <div class="marquee">
        <div class="marquee-content"> 
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
          </div>
          
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
          </div>
          
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
          </div>
          
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
          </div>
          
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
          </div>
          
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
          </div>
          
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
          </div>
          
          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
          </div>

          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d4@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm"  />
          </div>

          <div class="marquee-item">
          <img src="https://yaosamo.com/images/about/designforfriends/d2@2x.webp" className="h-[350px] w-[350px] min-h-[350px] min-w-[350px] rounded-sm" />
          </div>
        </div>
    </div>
  
      <main className='max-w-[1300px] px-10 mx-auto mt-14 flex flex-col gap-5 text-[#ebebeb]'>
        <h1 className='text-2xl leading-[160%]'>Hello there, <br />
          I'm Kartik Mistry a Frontend Developer & Designer based in Mumbai, India. Currently pursing my Bachelor's Degree in Computer Science.
          Always curious about human interactions, micro-animations, and crafting clean, captivating designs. So I am always spending my time building things that would elevate human interaction.
        </h1>

        <h1 className='text-2xl leading-[160%]'>

        In the ever-evolving world of technology, I thrive on learning and growing. I am constantly seeking opportunities to broaden my skill set and embrace new technologies to stay ahead of the game.
        What sets me apart is my penchant for thinking outside the box. I take immense pleasure in brainstorming innovative ideas that not only look visually stunning but also serve a practical purpose for users.</h1>

        <h1 className='text-2xl leading-[160%]'>
          My tech stack includes a range of powerful technologies like HTML, CSS, ReactJS, TailwindCSS, Firebase, Framer Motion, and GitHub, empowering me to bring ideas to life and deliver exceptional user experiences. I am Currently looking for joining a team of skilled developers If you're looking for a frontend developer who's always eager to create something meaningful, let's connect and make magic happen! Together, we can bring your digital ideas to reality. Thanks for stopping by and feel free to reach out. 
        </h1>
        
        <div className='flex flex-col items-start justify-start gap-5 mt-10'>

          <h2 className='text-xl font-medium'>Socials</h2>

          <a href='/' className='hover:scale-[1.05] transition-all opacity-95 hover:opacity-100 flex items-center justify-center rounded-3xl cursor-pointer'>
            <svg className='mr-4 text-2xl' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
            <p>hello@kartikmistry</p>
          </a>

          <a href='/'  className='hover:scale-[1.05] transition-all opacity-95 hover:opacity-100 flex items-center justify-center rounded-3xl cursor-pointer'>
            <svg className='mr-4 text-2xl' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            <p>kartikmistry</p>
          </a>

          <a href='/'  className='hover:scale-[1.05] transition-all opacity-95 hover:opacity-100 flex items-center justify-center rounded-3xl cursor-pointer'>
            <svg className='mr-4 text-2xl' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
            <p>developedbykmistry</p>
          </a>

          <a href='/'  className='hover:scale-[1.05] transition-all opacity-95 hover:opacity-100 flex items-center justify-center rounded-3xl cursor-pointer'>
            <svg className='mr-4 text-2xl' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>
            <p>karrtikkk__</p>
          </a>

        </div>

      </main>
    </div>
  )
}

export default About