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
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Page() {
  const [expencesState, setExpencesState] = useState({
    expences: "",
    description: "",
  });
  const [expences, setExpences] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const { userId, isSignedIn } = useAuth();
  //Fetching API endPoint
  const handelEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      console.error("user is not signed in");
      return;
    }
    try {
      let res = await fetch("/api/expences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...expencesState, userId }),
      });
      if (!res.ok) {
        throw new Error("Failed to submit expences");
      }
      //To Clear the form after sucessfull submission
      setExpencesState({ expences: "", description: "" });
      fetchExpences();
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

  const fetchExpences = async () => {
    try {
      const response = await fetch("/api/expences");
      if (!response.ok) {
        throw new Error("Failed to fetch expences");
      }
      const data = await response.json();
      setExpences(data);
    } catch (error) {
      console.error("Error fetching expences:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      fetchExpences();
    } else {
      setIsLoading(false);
    }
  }, [isSignedIn]);

  if (isloading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }

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
                <Input
                  id="description"
                  value={expencesState.description}
                  onChange={handelChange}
                />
              </DialogDescription>
              <DialogTitle>Enter Your Amount</DialogTitle>
              <DialogDescription>
                <Input
                  id="expences"
                  value={expencesState.expences}
                  onChange={handelChange}
                />
                <div className="pt-3">
                  <Button onClick={handelEntry}>Submit</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div>
          <ul>
            {expences.map((expence: any) => (
              <li key={expence._id}>
                {expence.description}:रु{expence.expences}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
