import React from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";

const navMenuItems = [
  {
    category: "Find Work",
    items: [
      {
        title: "Browse Jobs",
        link: "/find-work/browse-jobs",
        description: "Discover job postings and freelance opportunities.",
      },
      {
        title: "Explore Gigs",
        link: "#",
        description: "Offer or browse service-based gigs.",
      },
      {
        title: "FYP Listings",
        link: "#",
        description: "Get hired or post final year project requirements.",
      },
    ],
  },
  {
    category: "Startups",
    items: [
      {
        title: "Startup Directory",
        link: "#",
        description: "Browse a growing list of student-led and indie startups.",
      },
      {
        title: "Showcase",
        link: "#",
        description: "Discover featured and trending startup projects.",
      },
    ],
  },
  {
    category: "Post",
    items: [
      {
        title: "Post a Job",
        link: "#",
        description: "Hire freelance talent for short or long-term work.",
      },
      {
        title: "Create a Gig",
        link: "#",
        description: "List your service offering as a gig.",
      },
      {
        title: "Submit Startup",
        link: "#",
        description: "Submit your startup for discovery and networking.",
      },
    ],
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mt-8">
          <SheetTitle>Menu</SheetTitle>
          <Accordion type="single" collapsible>
            {navMenuItems.map((navItem, idx) => (
              <AccordionItem value={navItem.category} key={idx}>
                <AccordionTrigger className="text-2xl">
                  {navItem.category}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {navItem.items.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link} className="block">
                          <div className="font-medium">{item.title}</div>
                          <div className="text-muted-foreground text-sm">
                            {item.description}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
