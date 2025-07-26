import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Details | Upmesh",
  description:
    "View details for the job post, including requirements, skills, and budget. Apply now to join the exciting project.",
};

export default function JobDetailsPage() {
  return (
    <>
      <section className="py-5 max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Job Title & Meta */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Landing Page</h2>
            <span className="text-sm text-muted-foreground">
              Posted 8 minutes ago
            </span>
          </div>

          <Separator />

          {/* Job Description */}
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Description</h4>
            <p className="text-muted-foreground leading-relaxed">
              We are looking for a React developer to build a dashboard UI for
              our SaaS product. Experience with Tailwind CSS is a plus.
            </p>
          </div>

          <Separator />

          {/* Price */}
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Price</h4>
            <span className="text-xl font-semibold text-primary">
              Rs. 500,000
            </span>
          </div>

          <Separator />

          {/* Skills Required */}
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind CSS"].map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center bg-muted text-sm py-1 px-3 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <Separator />

          {/* Proposal Form */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Submit a Proposal</h4>

            {/* Cover Letter */}
            <div className="space-y-2">
              <label htmlFor="coverLetter" className="text-sm font-medium">
                Cover Letter
              </label>
              <Textarea
                id="coverLetter"
                placeholder="Write a brief cover letter explaining why you're the best fit..."
                rows={15}
                className="h-[200px]"
              />
            </div>

            {/* Connects Field */}
            <div className="space-y-2">
              <label htmlFor="connects" className="text-sm font-medium">
                Connects to Use
              </label>
              <Input
                id="connects"
                type="number"
                min={1}
                placeholder="Enter connects (e.g., 5)"
                className="w-[200px]"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="mt-4">
              Submit Proposal
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
