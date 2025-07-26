import React from "react";

import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <Loader2 className="animate-spin w-20 h-20" />
    </div>
  );
}
