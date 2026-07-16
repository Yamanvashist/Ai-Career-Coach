"use client";
import React from "react";
import { Menu } from "lucide-react";
import { useSidebarStore } from "@/store/sidebarStore";

const MobileHeader = () => {
  const { toggle } = useSidebarStore();

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-300 bg-white px-4 shadow-sm md:hidden">
      <button onClick={toggle} className="rounded-lg p-2 hover:bg-gray-100">
        <Menu size={26} />
      </button>

      <h1 className="text-xl font-bold">
        Path<span className="text-blue-500">Way</span>
      </h1>

      <div className="w-10.5" />
    </header>
  );
};

export default MobileHeader;
