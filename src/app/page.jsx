import React from 'react'
import HomeHeader from "@/component/HomeHeader"; 
import Image from 'next/image';
import HomeSearch from '@/component/HomeSearch';

export default function Home() {
  return (
    <>
    {/**header */}
    <HomeHeader/>
    {/**body */}
    <div className='flex flex-col items-center mt-24'>
      <Image width="300" height="100" 
        src="https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png">
      </Image>
      <HomeSearch/>

    </div>
    </>
  )
}
