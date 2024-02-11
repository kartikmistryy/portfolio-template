import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import todo from '/preview/todoComponent.mp4'
import inputBox from '/preview/inputBox.mp4'
import stickyVideo from '/preview/stickyVideo.mp4'

function Homepage() {

  useEffect(() => {
    document.querySelectorAll('video').forEach(vid => {
      vid.play()
      vid.loop
    })
  }, [])  

  const [ mobileMode ,setMobileMode] = useState(false)

  useEffect(() => {
    if(window.screen.width > 500){
      setMobileMode(false)
    }
    else{
      setMobileMode(true)
    }
  }, [])

  return (
    <div className='bg-[#040404] h-full text-white'>
        <Navbar/>
        <main className='py-44 h-fit min-h-[60vh]'>
          {!mobileMode && <h1 className='text-2xl flex flex-col max-w-[750px] mx-auto leading-[160%]'>
          <span><i className='text-gray-200 font-sans'>kartik.mistry</i>, frontend developer and designer  with a passion of bringing ideas to life through stunning experiences, focused on </span>
                <span className='flex flex-row items-center gap-2'>
                     crafting 
                    <svg className='scale-[1.2]' width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" class="c-arzPs" color="currentColor"><path d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    interactive and robust applications and  interafaces
                </span>

                <span className='flex items-center'>
                     that brings value to peoples lives 
                    <svg className='ml-2' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z"></path></svg>. currently looking for new  
                </span>
                   opportunites as a frontend developer.</h1>}

          {mobileMode && <h1 className='max-w-[750px] mx-auto leading-[170%] h-full px-5 text-[24px] text-left'>
                <i className='text-gray-200 font-sans'>kartik.mistry</i>, frontend developer and designer  with a passion of bringing ideas to life through stunning experiences, focused on crafting interactive and robust applications and  interafaces that brings value to peoples lives. currently looking for new opportunites as a frontend developer.</h1>}
        </main>

        <div id='work'  className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-3 grid-cols-2  justify-start items-center gap-20 bg-black lg:p-24 p-5 rounded-2xl relative">
          <video src={inputBox} 
          className="col-span-1 object-center object-fill rounded-2xl w-fit" autoPlay loop></video>

          <video src={todo} className="rounded-3xl object-contain w-full" autoPlay loop></video>

          <video src="https://cdn.rauno.me/buttons2.mp4#t=0.01" className="rounded-3xl object-contain w-full" autoPlay loop></video>

          <video src={stickyVideo} className='col-span-2 rounded-3xl object-contain w-full' autoPlay loop></video>

          <video src="https://yaosamo.com/images/work/case-four/item-1/img-6.mp4" className='rounded-3xl object-cover col-span-1 w-full' autoPlay loop></video>

          <img src="https://images.pexels.com/photos/16069883/pexels-photo-16069883/free-photo-of-a-grand-canyon-in-unated-states-of-america.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="rounded-3xl object-contain w-full"  />

          <img src="https://images.pexels.com/photos/12513116/pexels-photo-12513116.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="rounded-3xl object-contain mt-10 w-full"  />
        </div>

        <div className='max-w-[1400px] mx-auto py-20'>
          <div className='flex flex-col lg:p-0 px-4'>
            <p className='lg:text-xl text-lg'>2023 / Real Time Application</p>
            <h1 className='lg:text-5xl font-semibold lg:mt-8 mt-4 text-3xl'>TheDailyScroll ~ Blog Application</h1>
            <p className='lg:text-xl text-lg font-normal lg:mt-6 mt-2'>A full-stack blog application made using ReactJS, TailwindCSS, Firebase</p>
          </div>

          <div className='flex flex-col my-10 lg:gap-4 gap-2'>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
          </div>
        </div>

        <div className='max-w-[1400px] mx-auto lg:py-20 p-0'>
          <div className='flex flex-col lg:p-0 px-4'>
            <p className='lg:text-xl text-lg'>2023 / Desktop Application</p>
            <h1 className='lg:text-5xl font-semibold lg:mt-8 mt-4 text-3xl'>Notes Application</h1>
            <p className='lg:text-xl text-lg font-normal lg:mt-6 mt-2'>An application to read, write and create new notes</p>
          </div>

          <div className='flex flex-col my-10 lg:gap-4 gap-2'>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] lg:h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
          </div>
        </div>

        <div className='max-w-[1400px] mx-auto py-4 px-4'>
          <h1 className='text-2xl font-medium mb-6'>Some of my side projects</h1>

          <div className='flex flex-col py-2 my-2 w-full max-w-[1400px] gap-4'>

            <div className='flex flex-row items-center justify-start bg-[#0e0e0e] lg:py-4 py-2 px-4 rounded-md relative hover:scale-[1.005]'>
              <p className='lg:text-xl text-lg text-white ml-1'>Notes App</p>
              <p className='ml-3 text-base text-gray-300'> Note taking application</p>
              <a href="#" className='bg-[#0e0e0e] p-2 rounded-full absolute right-5'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
              </a>
            </div> 
          </div>       
        </div>

        <footer className='max-w-[1400px] mx-auto lg:py-20 py-10 lg:flex lg:items-center lg:justify-between flex flex-col lg:flex-row items-start'>
          <h1 className='lg:text-3xl p-4 text-xl font-normal lg:leading-[170%] leading-[130%] lg:max-w-[75%]'>Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another you can reach out me via <a href="#" className='text-red-500 underline underline-offset-4'>message</a> or <a href="#" className='text-red-500 underline underline-offset-4'>email</a></h1>

          <div className='flex flex-col items-start justify-start gap-5 mt-10 px-4'>

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
        </footer>
    </div>
  )
}

export default Homepage