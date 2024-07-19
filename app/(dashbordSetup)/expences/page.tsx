"use client";

import ExpencesDescription from "@/app/export/expences.description";
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
  const handelEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let res = await fetch("/api/expences", {
        method: "POST",
        body: JSON.stringify(expencesState),
      });
      if (!res.ok) {
        throw new Error("Failed to submit expences");
      }
      //To Clear the form after sucessfull submission
      setExpencesState({ expences: "", description: "" });
    } catch (error) {
      console.error("Error Submitting expense", error);
    }
  };
  const handelChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpencesState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="grid grid-rows-2">
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
        <div>
          <ExpencesDescription />
        </div>
      </div>
    </div>
  );
}
