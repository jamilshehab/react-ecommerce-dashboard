import { BiShoppingBag } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { TbTrendingUp } from "react-icons/tb";

export const DATA = [
  { id: 0, name: "Overview", icon: FiBarChart2, color: "#6366f1", path: "/" },
  {
    id: 1,
    name: "Products",
    icon: BiShoppingBag,
    color: "#8B5CF6",
    href: "/products",
  },
  { id: 2, name: "Users", icon: FaUser, color: "#EC4899", href: "/users" },
  {
    id: 3,
    name: "Sales",
    icon: FaDollarSign,
    color: "#10B981",
    href: "/sales",
  },
  {
    id: 4,
    name: "Orders",
    icon: CiShoppingCart,
    color: "#F59E0B",
    href: "/orders",
  },
  {
    id: 5,
    name: "Analytics",
    icon: TbTrendingUp,
    color: "#3B82F6",
    href: "/analytics",
  },
];
