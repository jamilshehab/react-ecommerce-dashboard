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
  { id: 0, name: "Overview", path: "/" },
  {
    id: 1,
    name: "Products",
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
    href: "/analytics",
  },
];
