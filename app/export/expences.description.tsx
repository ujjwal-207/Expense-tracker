"use client";
import { useEffect, useState } from "react";
import { dbConnect } from "../lib/dbConnect";
import Expences from "../models/expences";

export default function ExpencesDescription() {
  const [expences, setExpences] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExpences() {
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
    }
    fetchExpences();
  }, []);
  if (isloading) return <div>Loading...</div>;
  if (error) return <div>Error:{error}</div>;
  return (
    <div>
      <ul>
        {expences.map((expence) => (
          <li key={expence._id}>{expence.description}</li>
        ))}
      </ul>
    </div>
  );
}
