import React from "react";

export default function BrowseJobsCardSkeleton() {
  return (
    <div className="animate-pulse p-4 border rounded-lg bg-gray-100">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
}
