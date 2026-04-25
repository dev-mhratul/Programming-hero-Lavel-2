"use client"


import {
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import Link from "next/link"


export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <Link href={'/dashboard/write-blog'}>Write Blog</Link>
      <Link href={'/dashboard/analytics'}>Analytics</Link>

    </SidebarGroup>
  )
}
