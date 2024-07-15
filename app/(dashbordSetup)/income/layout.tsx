import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Income",
  description: "page to add income",
};
export default function IncomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
