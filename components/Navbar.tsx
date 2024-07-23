"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";

import logo from "@/public/logo.png";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { Button } from "./ui/button";

export default function App() {
  return (
    <Navbar isBordered className="fixed">
      <NavbarBrand>
        <Image src={logo} alt="" width={100} height={100} />
        <p className="font-bold text-3xl text-inherit">HSIAB</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>Features</NavbarItem>
        <NavbarItem>
          <Link href="/dashboard">Dashboard</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <ThemeSwitch />
    </Navbar>
  );
}
