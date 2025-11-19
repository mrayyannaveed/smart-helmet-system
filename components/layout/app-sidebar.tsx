"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BarChart2, History, Settings, Shield, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Analytics",
    icon: BarChart2,
    href: "/analytics",
    color: "text-violet-500",
  },
  {
    label: "Ride History",
    icon: History,
    href: "/history",
    color: "text-pink-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card border-r w-64 hidden md:flex">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-xl font-bold">Smart Helmet</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "text-primary bg-primary/10" : "text-muted-foreground"
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
      <div className="px-3 py-2">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  )
}
