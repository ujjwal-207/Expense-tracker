import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "dashbord",
  description: "your finance(hisab)",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
