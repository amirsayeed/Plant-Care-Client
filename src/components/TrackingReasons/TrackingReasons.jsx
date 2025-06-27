import React from 'react';
import { GiLindenLeaf } from 'react-icons/gi';
import { IoTimeOutline } from 'react-icons/io5';
import { PiPottedPlantBold } from 'react-icons/pi';
import { TbReportAnalytics } from 'react-icons/tb';

const TrackingReasons = () => {
    return (
        <div className='my-6'>
            <div className='space-y-6 text-center'>
                <h2 className="font-bold text-2xl md:text-3xl"> Why Plant Care Tracking Matters</h2>
                <p className="font-medium text-base md:text-lg italic">Stay consistent. Grow better. Let your plants thrive</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10 bg-base-300 my-6 rounded-2xl'>
                <div className='flex flex-col gap-3'>
                    <IoTimeOutline size={40}/>
                    <h3 className='font-bold text-xl'>Timely Watering</h3>
                    <p className='text-base font-medium'>Never forget to water again—set schedules and get reminders to keep your plants hydrated and healthy.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <GiLindenLeaf size={40}/>
                    <h3 className='font-bold text-xl'>Indoor & Outdoor Support</h3>
                    <p className='text-base font-medium'>Whether it’s a sun-loving succulent or a shady fern, track care routines tailored to their environment.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <TbReportAnalytics size={40}/>
                    <h3 className='font-bold text-xl'>Track Plant Health</h3>
                    <p className='text-base font-medium'>Monitor plant condition over time with notes, health status, and visual logs—all in one place.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <PiPottedPlantBold size={40}/>
                    <h3 className='font-bold text-xl'>Smart Plant Parenting</h3>
                    <p className='text-base font-medium'>Make informed decisions based on care frequency, plant type, and growth history. Let your garden thrive with intention.</p>
                </div>
            </div>
        </div>
    );
};

export default TrackingReasons;