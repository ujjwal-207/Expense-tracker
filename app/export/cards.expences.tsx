"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useEffect, useState } from "react";

const Expencescard = ({ ExpencesData, IncomeData }) => {
  const [totalExpence, setTotalExpence] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  useEffect(() => {
    if (ExpencesData.length > 0 || IncomeData.lenght > 0) {
      CalculateTotal();
    }
  }, [ExpencesData, IncomeData]);
  const CalculateTotal = () => {
    const extotal = ExpencesData.reduce(
      (total, item) => total + item.expences,
      0
    );
    const intotal = IncomeData.reduce((total, item) => total + item.income, 0);
    setTotalIncome(intotal);
    setTotalExpence(extotal);
  };
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
              <CardContent>रु{totalExpence}</CardContent>
            </Card>
            <Card>
              <CardHeader className="px-4 pt-3 pb-2 xl:py-4 xl:px-6 font-normal">
                <CardTitle>Income</CardTitle>
                <CardDescription>Your total Income</CardDescription>
              </CardHeader>
              <CardContent>रु{totalIncome}</CardContent>
            </Card>
            <Card>
              <CardHeader className="px-4 pt-3 pb-2 xl:py-4 xl:px-6 font-normal">
                <CardTitle>Savings</CardTitle>
                <CardDescription>Your total Savings</CardDescription>
              </CardHeader>
              <CardContent>रु{totalIncome - totalExpence}</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expencescard;
