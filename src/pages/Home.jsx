import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="w-full">
        <div className="max-w-[1800px] mx-auto">
            <Navbar/>
            <main className="py-10 h-[88vh] flex items-end  mx-auto">
                {/* <h1 className="flex flex-col text-8xl w-[1200px] leading-[120%] font-medium tracking-tighter">
                <span className="flex flex-row">Front <span className="w-[100px] bg-black h-2 mt-14 mx-4"></span>end</span>
                <span> Developer & Designer based in Mumbai, India.</span>
                </h1> */}
                <h1 id="headline" className="flex flex-col text-8xl leading-[130%] font-medium tracking-tighter text-gray-950">
                  <div className="flex justify-end">
                    <span className="text-6xl flex items-center mr-4">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg>
                    </span> FR<span className="font-serif">O</span>NT  <span id="dash" className="w-[100px] h-1.5 mt-14 mx-4 bg-black"></span> END 
                  </div>
                  <div>
                    DESIGNER & DEVEL<span className="font-serif">O</span>PER
                  </div>
                  
                </h1>
            </main>

            <div className="max-w-[750px] ml-auto">
                {/* <p className="text-2xl leading-[180%]">I create neat animated and interactive websites and robust and asthetic applications. Currently looking for new opportunities as a fulltime frontend developer. I have worked with technologies such as NextJS, TailwindCSS, Firebase, Figma, etc</p> */}
                <p className="md:text-md 2xl:text-2xl sm:text-xl sm:flex-wrap  leading-[140%]">I strive to create robust and interactive applications and experiences that brings value to peoples lives. Currently looking for full-time opportunities as a Frontend developer.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Home