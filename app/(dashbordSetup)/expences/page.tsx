"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
  const [expencesState, setExpencesState] = useState({
    expences: "",
    description: "",
  });
  //Fetching API endPoint
  const handelEntry = async (e) => {
    e.preventDefault();
    let res = await fetch("/api/expences", {
      method: "POST",
      body: JSON.stringify(expencesState),
    });
  };
  const handelChange = async (e) => {
    setExpencesState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div>
      <Dialog>
        <div className=" gap-7 box-content">
          <DialogTrigger asChild>
            <div
              className=" p-10 rounded-md items-center 
              flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md"
            >
              <h2>+</h2>
              <p>Add Your Expences</p>
            </div>
          </DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter About Your Expences</DialogTitle>
            <DialogDescription>
              <Input id="description" onChange={handelChange} />
            </DialogDescription>
            <DialogTitle>Enter Your Amount</DialogTitle>
            <DialogDescription>
              <Input id="expences" onChange={handelChange} />
              <div className="pt-3">
                <Button onClick={handelEntry}>Submit</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
