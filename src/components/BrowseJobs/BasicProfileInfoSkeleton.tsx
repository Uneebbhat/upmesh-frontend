import React from "react";

export default function BasicProfileInfoSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <div className="animate-pulse p-4 border rounded-lg bg-gray-100">
        <div className="h-10 w-10 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="animate-pulse p-4 border rounded-lg bg-gray-100">
        <div className="h-10 w-10 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="animate-pulse p-4 border rounded-lg bg-gray-100">
        <div className="h-10 w-10 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="animate-pulse p-4 border rounded-lg bg-gray-100">
        <div className="h-10 w-10 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
}
