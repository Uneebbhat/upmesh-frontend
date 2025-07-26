import React from "react";
import Image from "next/image";
import WorkCard from "../WorkCard";

import { Button } from "../ui/button";
import { IWorkCard } from "@/interfaces/Work";

const BrowseJobsCard = () => {
  const fakeJobs: IWorkCard[] = [
    {
      id: "1",
      time: "2 hours ago",
      title: "React Frontend Developer Needed",
      timeline: "3",
      budget: "50000",
      skillLevel: "Intermediate",
      content:
        "We are looking for a React developer to build a dashboard UI for our SaaS product. Experience with Tailwind CSS is a plus.",
      tags: ["React", "Tailwind", "UI"],
      proposals: "12",
    },
    {
      id: "2",
      time: "1 day ago",
      title: "Node.js Backend API Integration",
      timeline: "2",
      budget: "35000",
      skillLevel: "Expert",
      content:
        "Integrate third-party APIs into our Node.js backend. Must have experience with Express and RESTful APIs.",
      tags: ["Node.js", "API", "Express"],
      proposals: "7",
    },
    {
      id: "3",
      time: "3 days ago",
      title: "Junior Web Designer",
      timeline: "1",
      budget: "15000",
      skillLevel: "Beginner",
      content:
        "Assist in designing landing pages and marketing materials. Basic knowledge of Figma and HTML/CSS required.",
      tags: ["Figma", "HTML", "CSS"],
      proposals: "20",
    },
    {
      id: "4",
      time: "5 days ago",
      title: "Full Stack Developer for E-commerce Site",
      timeline: "6",
      budget: "120000",
      skillLevel: "Expert",
      content:
        "Develop a full-featured e-commerce site using MERN stack. Prior experience with payment gateways is required.",
      tags: ["MERN", "E-commerce", "Payments"],
      proposals: "5",
    },
    {
      id: "5",
      time: "5 days ago",
      title: "Full Stack Developer for E-commerce Site",
      timeline: "6",
      budget: "120000",
      skillLevel: "Expert",
      content:
        "Develop a full-featured e-commerce site using MERN stack. Prior experience with payment gateways is required.",
      tags: ["MERN", "E-commerce", "Payments"],
      proposals: "5",
    },
    {
      id: "6",
      time: "5 days ago",
      title: "Full Stack Developer for E-commerce Site",
      timeline: "6",
      budget: "120000",
      skillLevel: "Expert",
      content:
        "Develop a full-featured e-commerce site using MERN stack. Prior experience with payment gateways is required.",
      tags: ["MERN", "E-commerce", "Payments"],
      proposals: "5",
    },
    {
      id: "7",
      time: "5 days ago",
      title: "Full Stack Developer for E-commerce Site",
      timeline: "6",
      budget: "120000",
      skillLevel: "Expert",
      content:
        "Develop a full-featured e-commerce site using MERN stack. Prior experience with payment gateways is required.",
      tags: ["MERN", "E-commerce", "Payments"],
      proposals: "5",
    },
    {
      id: "8",
      time: "5 days ago",
      title: "Full Stack Developer for E-commerce Site",
      timeline: "6",
      budget: "120000",
      skillLevel: "Expert",
      content:
        "Develop a full-featured e-commerce site using MERN stack. Prior experience with payment gateways is required.",
      tags: ["MERN", "E-commerce", "Payments"],
      proposals: "5",
    },
    {
      id: "9",
      time: "5 days ago",
      title: "Full Stack Developer for E-commerce Site",
      timeline: "6",
      budget: "120000",
      skillLevel: "Expert",
      content:
        "Develop a full-featured e-commerce site using MERN stack. Prior experience with payment gateways is required.",
      tags: ["MERN", "E-commerce", "Payments"],
      proposals: "5",
    },
    {
      id: "10",
      time: "5 days ago",
      title: "Full Stack Developer for E-commerce Site",
      timeline: "6",
      budget: "120000",
      skillLevel: "Expert",
      content:
        "Develop a full-featured e-commerce site using MERN stack. Prior experience with payment gateways is required.",
      tags: ["MERN", "E-commerce", "Payments"],
      proposals: "5",
    },
  ];

  return (
    <>
      {fakeJobs.length > 0 ? (
        fakeJobs.map((job, idx) => <WorkCard workData={job} key={job.id} />)
      ) : (
        <div className="flex flex-col items-center justify-center mt-16 space-y-6">
          <Image
            src="/job-not-found.svg"
            alt="No matching jobs illustration"
            width={300}
            height={300}
            className="animate-fade-in"
          />
          <p className="text-lg font-semibold text-gray-700">
            No results match your filters
          </p>
          <p className="text-sm text-gray-500">
            Try refining or clearing your search criteria.
          </p>
        </div>
      )}
      <Button>Load more</Button>
    </>
  );
};

export default BrowseJobsCard;
