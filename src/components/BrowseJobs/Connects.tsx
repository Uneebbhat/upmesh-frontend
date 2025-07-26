import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";

const Connects = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Card className="py-0">
          <CardHeader>
            {/* <CardTitle className="text-2xl font-bold">Connects</CardTitle> */}
            {/* <CardContent>Connect: 100</CardContent> */}
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
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Connects;
