import { TiTick } from "react-icons/ti";


function HeroPage() {

    const tips = [
        "Photos " , "Livestreams ", "Shop Sytem" 
    ]

    const titles = [
      "Transparency","Security","Performance"
    ]
  return (
    <>
      <div className=" p-10 md:p-20 max-w-[100vw]  overflow-hidden">
        {/* Hero Section */}
        <div className="mt-10 lg:mb-20">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-7xl">
            Discover the Future
          </h1>
          <div className="flex items-center justify-center unbordered text-5xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[15vh] font-extrabold">
            <p>ASS I AM</p>
          </div>
          <div className=" flex justify-end w-[90%] font-bold text-2xl sm:text-xl md:text-4xl lg:text-5xl 2xl:text-7xl">
            <p>Of Pleasure Verse</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <p className=''>
            <span className="golden ">ASS I AM</span> isn't just a platform – it’s a revolutionary universe. We believe that adult entertainment is ready for a bold transformation. With ASS I AM, we break away from the outdated, one-sided offerings that  have dominated the market for far too long.  
          </p>
        </div>

        {/* Goal Section */}
        <div className="flex  mt-10 lg:mt-20  items-center justify-center sm:justify-end">
          <div className="rounded-3xl border-[#c95018] border p-5 sm:p-7 lg:p-10 w-[80%] sm:w-[60%] md:w-[50%]">
            <div className="flex justify-center items-center">
              <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Our Goal
              </h2>
            </div>
            <p className="para mt-2 ">
              To create an unparalleled ecosystem where everyone has the opportunity to participate, interact, and shape
              the experience.
            </p>
          </div>
        </div>
        <div>
        <p className=' para mt-10'>
            <span className="golden ">ASS I AM</span> Here, vision and innovation collide – redefining creativity, community, and fairness. ASS I AM connects creators and users as equals, opening up a world of opportunities far beyond passive consumption
          </p>
        </div>
        <div className="flex items-center w-full  border-t relative border-[#c95018] mt-10 md:mt-0 md:border-none
         justify-center">
<div className="md:border-[#c95018] md:border mt-20 md:relative  flex flex-col gap-3 md:flex-row md:gap-0  w-full md:w-[65%] md:mt-10 lg:mt-20 rounded-3xl md:px-10  md:py-12 para">
<div className="absolute hidden md:flex  -top-5 left-0   w-full  items-center justify-center">
<div className=" bg-[#c95018] w-[80%] rounded-3xl flex items-center justify-center text-white py-2 ">
<p className="text-[1.7vw]">THE PLEASURE UNIVERSE OF TOMORROW</p>
</div>
  </div>
  <div className="w-[55%] flex flex-col gap-3 font-bold">
{tips.map((tips)=>(
  <div className="flex gap-3" key={tips}>
  <p className="border-blue-500 bg-blue-400 px-2 rounded-[50%] text-white">{"?"}</p>
  <p >{tips}</p>
  </div>
))}
  </div>
  <div className="w-[50%] flex flex-col gap-3 font-bold">
{tips.map((tips)=>(
 <div className="flex gap-3" key={tips}>
 <p className="border-blue-500 bg-blue-400 px-2 rounded-[50%] text-white">{"?"}</p>
 <p >{tips}</p>
 </div>
))}
  </div>
  <div className="absolute top-0 md:hidden left-0 w-full flex items-center justify-center ">
    <div className="text-white bg-[#c95018] font-bold border-[#c95018] border rounded-b-3xl p-2 ">
      <p>THE PLEASURE OF TOMORROW</p>
      </div>
  </div>
  
        </div>
      </div> 
      
            <p className="para  capitalize mt-10 md:mt-20">
              
            <span className="text-orange-500 font-bold">ASS I AM</span> brings all this together in one dynamic, decentralized environment. This isn’t just about providing content – it’s about completely reimagining the experience.
            </p>
            
          <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
            <h1 className="heading">
              Our Mission
            </h1>
<p className="para mt-2 md:mt-5">
We’re building a vibrant ecosystem that combines creativity, passion, and innovation. ASS I AM invites you to break boundaries and turn imagination into reality. Here, everyone has the chance to be part of this revolution – whether as a creator sharing their vision or as a user who interacts, explores, and contributes.
</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
            <h1 className="heading">
              Creating Together
            </h1>
<p className="para mt-2 md:mt-5">
ASS I AM puts the power in the hands of the community. The interaction between users and creators is at the heart of everything we do – whether through exclusive content, live experiences, or creative connections
</p>
<p  className="mt-10 para md:mt-20 ">
Our universe is an open invitation to join a dynamic shift and shape the futur of adult entertainment together
</p>
            </div>
            <div className="mt-10 md:mt-20 flex flex-col items-center justify-center">
              <h1 className="heading ">
              <span className="text-orange-500">ASS I AM</span> – No Shame. No Limits. All Pleasure
              </h1>
              <p className="para mt-5">This is more than entertainment</p>

              <h3 className="para font-bold mt-5 md:mt-10 text-orange-500 ">Its a revolution</h3>
              <p className="para  mt-5 md:mt-10">
              Be part of the next era – a world where imagination knows no bounds and everyone is part of the bigger picture
              </p>
              <h1 className="heading mt-5 md:mt-10">
              <span className="text-orange-500">ASS I AM</span> – No Shame. No Limits. 
              </h1>
            </div>
          
      </div>
    </>
  );
}

export default HeroPage;
