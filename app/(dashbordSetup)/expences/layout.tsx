import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Expences",
  description: "page to add your expences",
};
export default function ExpencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
