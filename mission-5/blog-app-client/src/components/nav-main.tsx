"use client"


import {
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import Link from "next/link"


export function NavMain({
  items,
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>

      {
        items.map((item, index) => {
          return (
            <Link key={index} href={item.url}>
              {item.title}
            </Link>
          )
        })
      }


    </SidebarGroup>
  )
}
