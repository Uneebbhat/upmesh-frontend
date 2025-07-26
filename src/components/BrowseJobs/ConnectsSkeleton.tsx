import React from "react";

export default function ConnectsSkeleton() {
  return (
    <div className="animate-pulse p-4 border rounded-lg bg-gray-100">
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  );
}
