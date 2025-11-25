import { 
  LayoutDashboard, 
  BarChart3, 
  FileText, 
  Settings,
  Factory,
  Scan,
  AlertTriangle,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Sprout
} from "lucide-react";

export interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  path?: string;
  items?: NavItem[];
  isOpen?: boolean;
}

export const sidenavItems: NavItem[] = [
  {
    id: "1",
    title: "Dashboard",
    icon: <LayoutDashboard />,
    path: "/dashboard",
  },
  {
    id: "2",
    title: "Production",
    icon: <TrendingUp />,
    isOpen: false,
    items: [
      {
        id: "2-1",
        title: "Production Overview",
        icon: <TrendingUp />,
        path: "/production-overview",
      },
      {
        id: "2-2",
        title: "Defect Analysis",
        icon: <BarChart3 />,
        path: "/defect-analysis",
      },
    ]
  },
  {
    id: "3",
    title: "Defect Categories",
    icon: <AlertTriangle />,
    isOpen: false,
    items: [
      {
        id: "3-1",
        title: "Growing Defects",
        icon: <Sprout />, // You might need to import this
        path: "/growing-defects",
      },
      {
        id: "3-2",
        title: "Farm Handling",
        icon: <Scan />,
        path: "/farm-handling",
      },
      {
        id: "3-3",
        title: "Processing Defects", 
        icon: <Factory />,
        path: "/processing-defects",
      },
    ]
  },
  {
    id: "4",
    title: "Reports & Analytics",
    icon: <FileText />,
    isOpen: false,
    items: [
      {
        id: "4-1",
        title: "Reports",
        icon: <FileText />,
        path: "/reports",
      },
    ]
  },
  {
    id: "5",
    title: "Settings",
    icon: <Settings />,
    path: "/settings",
  }
];