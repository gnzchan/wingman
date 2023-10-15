"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center justify-center">
        <div className="relative w-12 h-12">
          <Image fill alt="Wingman Logo" src="logo/wingman.svg" />
        </div>
        <div className="relative w-44 h-9">
          <Image fill alt="Wingman Logo" src="logo/text_wingman.svg" />
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="rounded-full">Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
