"use client";

// External Imports
import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
// Internal Imports
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import handleLike from "@/helper/handleLike";
import { IFindWorkProps } from "@/interface";

const WorkCard = ({ workData }: { workData: IFindWorkProps }) => {
  return (
    <Link href={`/job/${workData.id}`} className="relative block">
      <Card
        className="border-gray-200 transition-all relative"
        key={workData.id}
      >
        <div
          className="cursor-pointer hover:bg-gray-50 p-2 rounded-full absolute right-4 top-2 z-10"
          onClick={handleLike}
        >
          <Heart />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <CardDescription className="text-xs text-gray-500">
                {workData.time}
              </CardDescription>
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {workData.title}
                </CardTitle>
              </div>
              <CardDescription className="text-sm text-gray-600">
                Timeline: <strong>{workData.timeline} months</strong> • Budget:{" "}
                <strong>Rs. {workData.budget}</strong> •{" "}
                <strong>{workData.skillLevel}</strong>
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>{workData.content}</CardContent>

        <CardFooter className="flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3">
            {workData.tags.map((tag: any) => (
              <span
                key={tag}
                className="inline-flex items-center bg-gray-300 py-1 px-4 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <CardDescription className="text-sm text-gray-500">
              Proposals: <strong>{workData.proposals}</strong>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default WorkCard;
