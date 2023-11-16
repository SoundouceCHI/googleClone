"use client"; 
import React, { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx'; 
import {BsFillMicFill} from 'react-icons/bs'; 
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBox() {
  const router = useRouter(); 
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("searchTerm"); 
  const [term, setTerm] = useState(searchTerm||""); 
  function handleSubmit(e){
    e.preventDefault(); 
    if(!term.trim()) return 
    router.push(`/search/web?searchTerm=${term}`)
  }
  return (
    <form className='flex border-color-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow
    max-w-3xl items-center' onSubmit={(e)=> {handleSubmit(e)}}>
      <input onChange={(e)=> {setTerm(e.target.value)}} type='text' value={term} className='w-full focus:outline-none'/>
      <RxCross2 onClick={()=> {setTerm("")}} className='text-2xl text-gray-500 hover:cursor-pointer sm:mg-r-2'/>
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300'/>
      <AiOutlineSearch onClick={handleSubmit} className='text-2xl hidden sm:inline-flex text-blue-500 hover:cursor-pointer'/>
    </form>
  )
}
