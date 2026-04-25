"use client"
import React from 'react';
import Image from 'next/image';
import CompanyInfo from '@/app/components/home/info';
import Tabbar from '@/app/components/services-details/tabbar';
import TextSection from '@/app/components/services-details/text-section';
import DiscoverProperties from '@/app/components/home/services-option';


export default function Details() {

  return (
    <div>
      <section className="bg-cover pt-36 pb-20 relative bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden" >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-midnight_text text-4xl lg:text-[50px] leading-[1.2] md:mx-auto md:max-w-60% text-center relative font-bold dark:text-white"> </h2>
        </div>
      </section>
      <section>
        <div className='container mx-auto dark:bg-darkmode'>
          <div className="h-[580px] max-w-7xl mx-auto w-full">
            <Image
              src="/images/avatar/lab2.jpeg"
              alt="lab tech"
              width={1000}
              height={600}
              className='h-full w-full object-cover rounded-lg'
            />
          </div>
        </div>
      </section>
      <TextSection />
      <CompanyInfo />
      <Tabbar />
      <DiscoverProperties />
    </div>
  );
}
