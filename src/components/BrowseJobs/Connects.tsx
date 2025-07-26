import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const Connects = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Card className="py-0">
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-bold">
                  Connects: 120
                </AccordionTrigger>
                <AccordionContent>
                  <Button className="w-full">Buy Connects</Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Connects;
