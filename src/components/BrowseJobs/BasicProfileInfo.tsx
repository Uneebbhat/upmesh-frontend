import React from "react";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BasicProfileInfo = () => {
  return (
    <>
      <div className="border p-4 hidden lg:flex items-center rounded-lg gap-4">
        {/* <Card className="w-full">
          <CardHeader className="flex flex-col text-center items-center justify-center gap-4 px-2">
            
          </CardHeader>
        </Card> */}
        <Avatar className="w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile Img" />
          <AvatarFallback className="text-2xl">CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl underline">Uneeb</CardTitle>
          <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap w-40">
            Web Developer Full stackfsffsff
          </CardDescription>
        </div>
      </div>
    </>
  );
};

export default BasicProfileInfo;
