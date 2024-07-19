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
import { useEffect, useState } from "react";

export default function Page() {
  const [inputState, setInputState] = useState({
    income: "",
    description: "",
  });
  const [error, setError] = useState(null);
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetching API endPoint for post
  const handelEntry = async (e) => {
    e.preventDefault();
    let res = await fetch("/api/income", {
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
  //For GET
  useEffect(() => {
    async function fetchIncome() {
      try {
        const response = await fetch("/api/income");
        if (!response.ok) {
          throw new Error("Failed to fetch the /income");
        }
        const data = await response.json();
        setIncomeData(data);
      } catch (error) {
        console.error("Error Fetching:", error);
        setError(error.message);
      }
    }
    fetchIncome();
  }, []);
  if (loading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }
  return (
    <div>
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
        <div>
          <ul>
            {incomeData.map((income: any) => (
              <li key={income._id}>
                {income.description}:रु{income.income}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
