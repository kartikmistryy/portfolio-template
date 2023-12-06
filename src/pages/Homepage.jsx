import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import todo from '/preview/todoComponent.mp4'

function Homepage() {

  useEffect(() => {
    document.querySelectorAll('video').forEach(vid => {
      vid.play()
      vid.loop
    })
  }, [])


  return (
    <div className='bg-[#040404] h-full text-white'>
        <Navbar/>
        <main className='py-44 h-fit min-h-[60vh]'>
            <h1 className='text-2xl flex flex-col max-w-[750px] mx-auto leading-[160%]'>
                kartik.mistry, frontend developer and designer  with a passion of bringing ideas to life through stunning experiences, focused on 
                <span className='flex flex-row items-center gap-2'>
                     crafting 
                    <svg className='scale-[1.2]' width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" class="c-arzPs" color="currentColor"><path d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    interactive and robust applications and  interafaces
                </span>

                <span className='flex items-center'>
                     that brings value to peoples lives 
                    <svg className='ml-2' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z"></path></svg>. currently looking for new  
                </span>
                   opportunites as a frontend developer.</h1>
        </main>

        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-3 grid-cols-2 gap-20 bg-black p-24 rounded-2xl relative">
        <video src="https://yaosamo.com/images/work/case-four/item-1/img-1.mp4" 
        className="col-span-1 rounded-3xl object-contain" autoPlay loop></video>

        <video src={todo} className="rounded-3xl object-contain" autoPlay loop></video>

        <video src="https://cdn.rauno.me/buttons2.mp4#t=0.01" className="rounded-3xl object-contain" autoPlay loop></video>

        <video src="https://yaosamo.com/images/work/case-four/item-1/img-5.mp4" className='col-span-2 rounded-3xl object-contain' autoPlay loop></video>

        <video src="https://yaosamo.com/images/work/case-four/item-1/img-6.mp4" className='rounded-3xl object-cover col-span-1' autoPlay loop></video>

        <img src="https://images.pexels.com/photos/16069883/pexels-photo-16069883/free-photo-of-a-grand-canyon-in-unated-states-of-america.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="rounded-3xl object-contain"  />

        <img src="https://images.pexels.com/photos/12513116/pexels-photo-12513116.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="rounded-3xl object-contain mt-10"  />
        </div>

        <div className='max-w-[1400px] mx-auto py-20'>
          <div className='flex flex-col'>
            <p className='text-xl'>2023 / Real Time Application</p>
            <h1 className='text-5xl font-semibold mt-8'>TheDailyScroll ~ Blog Application</h1>
            <p className='text-xl font-normal mt-6'>A full-stack blog application made using ReactJS, TailwindCSS, Firebase</p>
          </div>

          <div className='flex flex-col my-10 gap-2'>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
          </div>
        </div>

        <div className='max-w-[1400px] mx-auto py-20'>
          <div className='flex flex-col'>
            <p className='text-xl'>2023 / Desktop Application</p>
            <h1 className='text-5xl font-semibold mt-8'>Notes Application</h1>
            <p className='text-xl font-normal mt-6'>An application to read, write and create new notes</p>
          </div>

          <div className='flex flex-col my-10 gap-2'>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
            <div className='flex items-center justify-center bg-[#000] h-[90vh] w-full object-center rounded-2xl'>
                <img src="https://yaosamo.com/images/work/case-two/item-4/img-1@2x.webp" className="h-full w-[90%]" />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Homepage