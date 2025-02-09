import Sidebar from "@/components/sidebar";
import Image from "next/image";
import logo from "@/public/logo.png";
import ThemeSwitch from "@/components/ThemeSwitch";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="justify-between flex">
        <div>
          <Image src={logo} alt="" width={70} height={70} />
          <h2 className="">Ujjwal</h2>
          <p>Your Money</p>
        </div>
        <div className="mt-11 mr-7 flex grid-flow-row">
          Change Themes
          <ThemeSwitch />
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <hr />

      <div className="flex gap-16">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
