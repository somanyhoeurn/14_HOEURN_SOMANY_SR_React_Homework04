import { Bell, Search } from "lucide-react";
import React, { useState } from "react";

export default function TopNavbarComponent({ searchTerm, setSearchTerm, onSearchSubmit }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-center pr-10">
      <form className="relative w-9/12 " onSubmit={onSearchSubmit}>
        {/* search button */}
        <button className="cursor-pointer">
          <Search className="w-6 h-6 text-primary-text absolute top-3 left-4" />
        </button>

        {/* search input */}
        <input
          type="text"
          placeholder="Search assignment here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:border-none focus:ring-0 focus:outline-custom-sky-blue shadow-md"
        />
      </form>

      {/* notification bell */}
      <div className="relative w-12 h-12 bg-white p-2.5 rounded-full">
        <Bell className="w-7 h-7 text-primary-text" />
        {/* red dot */}
        <div className="bg-red-600 w-2.5 h-2.5 rounded-full absolute top-2 right-3"></div>
      </div>

      {/* profile image */}
      <div className="h-16 rounded-xl w-2/12 bg-white py-2.5 px-3 flex gap-3 items-start">
        <img
          src="./src/assets/manyPF.jpg"
          alt="profile image"
          width={45}
          height={45}
          className="rounded-full"
        />

        {/* username and email */}
        <div>
          <p className="capitalize text-base">Hoeurn Somany</p>
          <p className="text-gray-400 text-sm">zuukie333@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
