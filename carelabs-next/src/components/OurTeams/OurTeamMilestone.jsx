import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'


const OurTeamMilestone = () => {
    return (
        <div>
            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className="flex flex-col w-[85%] p-5 text-center
                      2xl:w-[50%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'>Milestones on Our Journey</h2>
                    <p className='text-[18px]   para-text  poppins-font'>A decade of growth in electrical safety expertise.</p>
                </div>
                <div className="flex flex-col w-[85%] rounded-2xl mt-10 2xl:w-[65%]">

                    <div className="w-full flex  flex-col gap-10 relative  z-0">

                         <div className="absolute md:left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-black z-10 "></div>

                        <div className="w-full quotes-background h-full  md:h-[200px] flex flex-col md:flex-row justify-between items-center relative z-">
                               <div className="absolute left-0 md:left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 
                                             w-6 h-6 gradient-bg rounded-full  z-20">
                                </div>

                            {/* LEFT BLOCK */}
                            <div className="w-[80%] md:w-[40%] bg-white card-shadow flex items-end justify-end rounded-2xl h-full ">
                                <div className="w-[80%] text-right p-5 h-full">
                                    <p className='text-[14px] poppins-font secondary-color'>2013-2015</p>
                                    <h2 className='text-[20px] montserrat-font font-semibold'>
                                        Early field inspections & audits across the GCC
                                    </h2>
                                    <p className='text-[14px] para-text poppins-font'>
                                        Established our foundation in electrical safety with comprehensive site assessments for utilities and industrial facilities.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT IMAGE BLOCK */}
                            <div className="w-[80%] md:w-[40%] p-2 h-[200px] md:h-full">
                                <div
                                    className=" bg-cover bg-center bg-no-repeat h-full rounded-2xl"
                                    style={{ backgroundImage: `url(${carelabzImage.src})` }}
                                ></div>
                            </div>


                        </div>

                        <div className="w-full quotes-background h-[400px] flex  flex-col md:flex-row relative">

                           <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                                            w-6 h-6 gradient-bg rounded-full ">
                            </div>

                            <div className="w-full md:w-[50%] h-full flex items-center justify-center md:items-end md:justify-start">
                                <div className="w-[80%] text-right p-5 h-[200px]bg-white card-shadow rounded-2xl">
                                    <p className='text-[14px] poppins-font secondary-color'>2013-2015</p>
                                    <h2 className='text-[20px] montserrat-font font-semibold'>
                                        Early field inspections & audits across the GCC
                                    </h2>
                                    <p className='text-[14px] para-text poppins-font'>
                                        Established our foundation in electrical safety with comprehensive site assessments for utilities and industrial facilities.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-[50%] h-full flex items-center justify-center md:items-start md:justify-end">
                                <div className="w-[80%] text-right h-[200px] bg-amber-50 ">
                                    <div
                                    className=" bg-cover bg-center bg-no-repeat h-full rounded-2xl "
                                    style={{ backgroundImage: `url(${carelabzImage.src})` }}
                                ></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default OurTeamMilestone
