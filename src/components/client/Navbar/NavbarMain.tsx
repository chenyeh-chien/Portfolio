"use client"

import { ReactNode } from "react";
import Navbar from "./Navbar";
import { useOverflowHidden } from "@/components/client/utils/hooks";
import { SidebarProvider } from "../../../context/SidebarContext";

interface Props {
  blogMenu: ReactNode;
}

export default function NavbarMain({ blogMenu }: Props) {
  const [showSidebar, setShowSidebar] = useOverflowHidden();

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <SidebarProvider value={{ showSidebar, setShowSidebar }}>
      <Navbar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
        blogMenu={blogMenu} />
    </SidebarProvider>
  )
}
