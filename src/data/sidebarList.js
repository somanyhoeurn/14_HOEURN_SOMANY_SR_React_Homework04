// sidebarData.ts (Sample Data File)
import {
  CalendarDays,
  ChartSpline,
  FolderPlus,
  LayoutDashboard,
  Settings,
  UserRound,
} from "lucide-react";

export const sidebarList = [
  { id: 1, icon: LayoutDashboard, label: "Dashboard" },
  { id: 2, icon: FolderPlus, label: "Assignments" },
  { id: 3, icon: UserRound, label: "Students" },
  { id: 4, icon: ChartSpline, label: "Reports" },
  { id: 5, icon: CalendarDays, label: "Calendar" },
  { id: 6, icon: Settings, label: "Settings" },
];
