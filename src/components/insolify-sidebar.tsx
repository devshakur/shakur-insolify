"use client";

import { InsolifySidebarContent } from "@/components/insolify-sidebar-content";
import { InsolifySidebarPanel } from "@/components/insolify-sidebar-panel";

type InsolifySidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function InsolifySidebar({ open, onClose }: InsolifySidebarProps) {
  return (
    <InsolifySidebarPanel open={open} onClose={onClose}>
      <InsolifySidebarContent onNavigate={onClose} />
    </InsolifySidebarPanel>
  );
}
