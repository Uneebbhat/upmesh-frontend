"use client";

import { useState } from "react";
import { MouseEvent } from "@/types/Mouse";

const handleLikeJob = () => {
  const [filled, setFilled] = useState<boolean>(false);

  const handleLike = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFilled(!filled);
    console.log("Liked");
  };

  return { filled, handleLike };
};

export default handleLikeJob;
