"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

import FreeCounter from "@/components/free-counter";
import { cn } from "@/lib/utils";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-sky-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarProps {
  limitCount: number;
  isPro: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ limitCount, isPro }) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gradient-to-b from-[#ffc93c] via-[#ffbb09] to-[#2a2a2a] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-14 justify-center"
        >
          <div className="relative w-12 h-12">
            <Image fill alt="Wingman Logo" src="logo/wingman.svg" />
          </div>
          <div className="relative w-44 h-9">
            <Image fill alt="Wingman Logo" src="logo/text_wingman.svg" />
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-zinc-900 hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-zinc-900 bg-white/10 font-semibold"
                  : "text-zinc-600"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter limitCount={limitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
