import Sidebar from "@/components/sidebar";
import Image from "next/image";
import logo from "@/public/logo.png";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <div>
          <Image src={logo} alt="" width={60} height={60} />
          <h2 className="">Ujjwal</h2>
          <p>Your Money</p>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
      <hr />
      <div className="flex gap-16">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
