import React from 'react'

export default function ActiveScreen() {
  return (
    <div className="text-black px-5">
      <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
      <p className="px-5 rounded py-1 bg-red-300 hidden sm:block md:hidden">Sm</p>
      <p className="px-5 rounded py-1 bg-green-300 hidden sm:hidden md:block lg:hidden">Md</p>
      <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
      <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
      <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</p>
    </div>
  )
}
