import { BiShoppingBag } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { TbTrendingUp } from "react-icons/tb";
export const ICONS = [
  FiBarChart2,
  FaUser,
  FaDollarSign,
  CiShoppingCart,
  TbTrendingUp,
];
export const DATA = [
  { id: 0, name: "Overview", icon: FiBarChart2, path: "/" },
  {
    id: 1,
    name: "Products",
    color: "#8B5CF6",
    href: "/products",
  },
  { id: 2, name: "Users", href: "/users" },
  {
    id: 3,
    name: "Sales",
    href: "/sales",
  },
  {
    id: 4,
    name: "Orders",
    href: "/orders",
  },
  {
    id: 5,
    name: "Analytics",
    color: "#3B82F6",
    href: "/analytics",
  },
];
