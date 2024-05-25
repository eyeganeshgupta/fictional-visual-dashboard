import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

type Props = {
  children?: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2" />
    </>
  );
}
