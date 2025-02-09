import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { PiEye } from "react-icons/pi";
import { TbCurrencyDollar, TbTrendingUp } from "react-icons/tb";

export const ICONS = [
  FiBarChart2,
  FaUser,
  FaDollarSign,
  CiShoppingCart,
  TbTrendingUp,
];

export const CARD_ICONS = [TbCurrencyDollar, PiEye, LuUsers];
export const CARD_CONTENT = [
  { id: 0, name: "Revenue", value: "23.4k$", percentage: "+4.9%" },
  { id: 1, name: "Sessions", value: "23.4k", percentage: "+4.9%" },
  { id: 2, name: "Users", value: "23.4k", percentage: "+4.9%" },
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
