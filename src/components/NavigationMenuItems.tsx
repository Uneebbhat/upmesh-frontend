"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navMenuItems = [
  {
    category: "Find Work",
    items: [
      {
        title: "Browse Jobs",
        link: "#",
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

export function NavigationMenuItems() {
  return (
    <NavigationMenu className="relative z-30">
      <NavigationMenuList>
        {navMenuItems.map((menu, idx) => (
          <NavigationMenuItem key={idx}>
            <NavigationMenuTrigger>{menu.category}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-2">
                {menu.items.map((item, itemIdx) => (
                  <ListItem key={itemIdx} title={item.title} href={item.link}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
