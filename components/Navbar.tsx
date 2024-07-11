"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Image from "next/image";
import { Link } from "react-router-dom";

import logo from '@/public/logo.png'
import ThemeSwitch from "./ThemeSwitch";


export default function App() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Image src={logo} alt="" width={100} height={100}/>
        <p className="font-bold text-3xl text-inherit">HSIAB</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link  to='/home'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to= "/dashboard" >
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to='/login-signup' >Login</Link>
        </NavbarItem>
      </NavbarContent>
      <ThemeSwitch />
    </Navbar>
  );
}
