"use client"

import { createContext, useContext } from "react";

interface SidebarContextType {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  return useContext(SidebarContext);
}

export const SidebarProvider = SidebarContext.Provider;
