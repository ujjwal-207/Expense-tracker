"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [inputState, setInputState] = useState({
    income: "",
    expences: "",
    description: "",
  });
  //Fetching API endPoint
  const handelEntry = async (e) => {
    e.preventDefault();
    let res = await fetch("/api/input", {
      method: "POST",
      body: JSON.stringify(inputState),
    });
  };
  const handelChange = async (e) => {
    setInputState((prev) => ({
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
              <p>Add Your income</p>
            </div>
          </DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Your Income Source</DialogTitle>
            <DialogDescription>
              <Input id="description" onChange={handelChange} />
            </DialogDescription>
            <DialogTitle>Enter Your Income</DialogTitle>
            <DialogDescription>
              <Input id="income" onChange={handelChange} />
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
