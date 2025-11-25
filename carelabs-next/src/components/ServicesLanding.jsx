"use client";
import React from "react";


const ServicesLanding = ({service}) => {

  if (!service) return null;

  const {
    badge,
    mainheading1,
    mainheading2,
    maindesc,
    mainbutton1,
    mainbuttonlink1,
    mainbutton2,
    mainbuttonlink2,
    mainbutton3,
    mainbuttonlink3,
    mainimage,
    service_stats,
  } = service;



  return (
    <div className="w-full min-h-[80vh] pt-[80px] flex justify-center px-4 ">
      <div className="w-full xl:w-[90%] xl:px-6 2xl:w-[70%] flex flex-col lg:flex-row mt-12 gap-10 ">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5 py-2 ">

          {/* Badge */}
          <div className="w-fit">
            <p className="px-4 py-2 text-xs sm:text-sm rounded-full text-center card-shadow bg-white">
              {/* Engineering Excellence Since 2010 */}
              {badge}
            </p>
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col gap-3">
           <div className=" w-[80%] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold ">
             <p className=" gradient-text ">
              {/* Power System Analysis   */}
              {mainheading1}
            </p>
            <p className="text-black "> 
              {/* for Safe, Reliable Networks */}
              {mainheading2}
              </p>
           </div>

            <p className="w-[80%] text-sm sm:text-base lg:text-lg leading-7 text-gray-700">
              {/* Comprehensive electrical studies to identify risks, optimize
              performance, and ensure compliance with international standards
              across all voltage levels. */}
               {maindesc}
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-4">

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="px-6 sm:px-8 py-2 text-white rounded-lg text-sm bg-blue-600">
                Request a Study
              </button> */}

              <a
                href={mainbuttonlink1}
                //className="px-6 sm:px-8 py-2 text-white rounded-lg text-sm bg-blue-600"
                className="
                group relative px-6 sm:px-8 py-2 rounded-lg text-sm 
                bg-blue-600 text-white overflow-hidden
                "
              >
                <span
                className="
                absolute inset-0 bg-blue-400/30 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
                "
                ></span>
                <span className="relative z-10">{mainbutton1}</span>
                {/* {mainbutton1} */}
              </a>

              {/* <button className="px-6 sm:px-8 py-2 text-sm border-2 rounded-lg border-blue-500 bg-white text-gray-600">
                Download Sample Report
              </button> */}
               
               <a
                href={mainbuttonlink2}
                //className="px-6 sm:px-8 py-2 text-sm border-2 rounded-lg border-blue-500 bg-white text-gray-600"
                className="
                group relative px-6 sm:px-8 py-2 text-sm 
                border-2 rounded-lg border-blue-500 
                bg-white text-gray-600
                overflow-hidden
                "
              >
                <span
                className="
                absolute inset-0 bg-blue-200/40 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
                "
                ></span>
                {/* {mainbutton2} */}
                <span className="relative z-10">{mainbutton2}</span>
              </a>

            </div>

            {/* <button className="px-6 sm:px-8 py-2 text-sm rounded-lg border-2 border-orange-400 text-gray-600
              lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
              Download Sample Report
            </button> */}

            <a
              href={mainbuttonlink3}
              //className="px-6 sm:px-8 py-2 text-sm rounded-lg border-2 border-orange-400 text-gray-600 lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
              className="
              group relative px-6 sm:px-8 py-2 text-sm rounded-lg 
              border-2 border-orange-400 text-gray-600
              lg:w-[60%] xl:w-[50%] 2xl:w-[40%]
              overflow-hidden
              "  
            >
              <span
              className="
              absolute inset-0 bg-blue-200/40 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
              "
              ></span>
              <span className="relative z-10">{mainbutton3}</span>
              {/* {mainbutton3} */}
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        {/* <div className="w-full lg:w-[50%] flex justify-center ">
          <div
            className="
              w-full 
              h-[260px] 
              sm:h-[340px] 
              md:h-[420px] 
              lg:h-[480px] 
              rounded-4xl 
              relative 
              overflow-visible 
              shadow-lg
              2xl:mt-6
            "
            style={{
              backgroundImage: `url("${mainimage?.url}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent rounded-4xl"></div>

            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 
              w-[90%] sm:w-[80%] lg:w-[90%]
              flex items-center justify-between gap-3 p-3 z-20">

              {service_stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white w-1/3 py-4 rounded-lg text-start ps-3 shadow"
                >
                  <p className="text-lg text-blue-500 font-bold">{stat.number}</p> 
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
              
            </div>
          </div>
        </div> */}

{/* <div className="w-full lg:w-[50%] flex justify-center">
  <div
    className="
      group relative w-full 
      h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]
      pb-16 sm:pb-20
    "
  >

    
    <div className="relative w-full h-full rounded-4xl shadow-lg overflow-hidden">
      
      <img
        src={mainimage?.url}
        alt="Service"
        className="
          w-full h-full object-cover
          transition-transform duration-[1100ms]
          ease-[cubic-bezier(.13,.62,.31,1)]
          group-hover:scale-[1.08]
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div
      className="
        absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2
        w-[90%] sm:w-[85%] lg:w-[90%]
        flex items-center justify-between gap-3 sm:gap-4 z-20
      "
    >
      {service_stats?.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white w-1/3 py-3 sm:py-4 px-2 sm:px-3 rounded-lg sm:rounded-xl text-start shadow-lg"
        >
          <p className="text-base sm:text-lg lg:text-xl text-blue-500 font-bold">{stat.number}</p>
          <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>

  </div>
</div> */}

<div className="w-full lg:w-[50%] flex justify-center">
  <div
    className="
      group relative w-full 
      h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]
      pb-16 sm:pb-20
    "
  >

    {/* Image Container */}
    <div className="relative w-full h-full rounded-4xl shadow-lg overflow-hidden">
      <img
        src={mainimage?.url}
        alt="Service"
        className="
          w-full h-full object-cover
          transition-transform duration-[1100ms]
          ease-[cubic-bezier(.13,.62,.31,1)]
          group-hover:scale-[1.08]
        "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
    </div>

    {/* Floating Stats */}
    <div
      className="
        absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2
        w-[90%] sm:w-[85%] lg:w-[90%]
        flex items-center justify-between gap-3 sm:gap-4 z-20
      "
    >
      {service_stats?.map((stat, idx) => (
        <div
          key={idx}
          className="
            bg-white w-1/3 py-3 sm:py-4 px-2 sm:px-3 rounded-lg sm:rounded-xl text-start shadow-lg

            transform transition-all duration-500
            hover:scale-[1.06] hover:-translate-y-1 hover:shadow-xl
          "
        >
          <p className="text-base sm:text-lg lg:text-xl text-blue-500 font-bold">{stat.number}</p>
          <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>

  </div>
</div>



      </div>
    </div>
  );
};

export default ServicesLanding;
