import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const Expencescard = ({ Expences }) => {
  return (
    <div>
      <div>
        <div className="flex gap-16">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 tracking-tight mt-2">
            <Card>
              <CardHeader className="px-4 pt-3 pb-2 xl:py-4 xl:px-6 font-normal">
                <CardTitle>Expences</CardTitle>
                <CardDescription>Your total Expences</CardDescription>
              </CardHeader>
              <CardContent>{Expences}</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expencescard;
