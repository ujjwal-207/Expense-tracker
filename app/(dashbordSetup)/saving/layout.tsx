import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "saving",
  description: "page for saving",
};
export default function SavingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
