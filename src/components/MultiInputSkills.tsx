"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MultiInputSkills() {
  const [skills, setSkills] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setInput("");
    }
  };

  const removeSkill = (index: number) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="grid gap-1.5">
      <Label htmlFor="skills">Skills</Label>

      <div className="flex flex-wrap items-center gap-2 border rounded-md p-2 min-h-[48px] focus-within:ring-2 focus-within:ring-primary">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-2 py-1 bg-muted text-sm rounded-md"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-muted-foreground hover:text-red-500"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        <Input
          id="skills"
          placeholder="Type and press Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
        />
      </div>
    </div>
  );
}
