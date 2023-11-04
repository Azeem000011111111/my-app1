import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <>
    <div className='bg-gray-400 mt-20'>
      <p>This first line </p>
      <button className='bg-red-600 p-3 m-5'>Button</button>
      <p>This is last line</p>
      </div> 
      <div className='mt-10 flex space-x-5'>
        <button className='border border-black '>one</button>
        <button className='border border-black mx-10 '>two</button>
        <button className='border border-black border-4 p-2'>three</button>

        
      </div>
      <div className='my-10 mx-2'>
      <button className='border border-black border-4 p-3 rounded-md'>four</button>
      <button className='border border-black border-4 p-3 rounded-full'>five</button>
      </div>
      <div className='my-10 mx-2'>
      <button className='border bg-white p-5'>Card1</button>
      <button className='border bg-white p-5'>Card2</button>
      </div>
      <div className='my-10 mx-2'>
      <button className='border bg-white p-5 shadow-md'>Card1</button>
      <button className='border bg-white p-5 shadow-lg'>Card2</button>
      <button className='border bg-white p-5 shadow-xl'>Card3</button>

      </div>

      <div className='flex m-10 space-x-10'>
        <button className=' bg-red-900 p-5 '>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>
      <div className='flex m-10  flex-col space-y-10'>
        <button className=' bg-red-900 p-5 '>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>
      
      <div className='flex m-10  flex-col space-y-10'>
        <button className=' bg-red-900 p-5 order-last'>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>

      
      <div className='flex m-10  space-x-2 justify-center'>
        <button className=' bg-red-900 p-5 '>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>

      <div className='flex m-10  space-x-2 justify-end'>
        <button className=' bg-red-900 p-5 '>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>

      <div className='flex m-10  space-x-2 justify-between'>
        <button className=' bg-red-900 p-5 '>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>

      <div className='flex m-10  space-x-2 justify-around'>
        <button className=' bg-red-900 p-5 '>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>
      <div className='flex m-10  space-x-2 justify-evenly'>
        <button className=' bg-red-900 p-5 '>Card1</button>
        <button className=' bg-red-800 p-5 '>Card2</button>
        <button className=' bg-red-900 p-5'>Card3</button>

      </div>
      



    </>
  )
}

export default page