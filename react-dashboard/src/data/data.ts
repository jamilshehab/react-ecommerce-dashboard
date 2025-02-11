import { BsBoxArrowUp } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { LiaProductHunt } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { PiCurrencyDollarThin, PiEye, PiUsersThin } from "react-icons/pi";
import { TbCurrencyDollar, TbTrendingUp } from "react-icons/tb";

export const ICONS = [
  FiBarChart2,
  PiCurrencyDollarThin,
  PiUsersThin,
  CiShoppingCart,
  BsBoxArrowUp,
  TbTrendingUp,
];

export const CARD_ICONS = [TbCurrencyDollar, PiEye, LuUsers, LiaProductHunt];
export const CARD_CONTENT = [
  {
    id: 0,
    name: "Revenue",
    value: "23.4k$",
    percentage: "+4.9%",
    classNames:
      "bg-green-400 text-white h-14 w-15 rounded-lg flex justify-center items-center m-auto",
  },
  {
    id: 1,
    name: "Sessions",
    value: "23.4k",
    percentage: "+4.9%",
    classNames:
      "bg-blue-400 text-white h-14 w-15 rounded-lg flex justify-center items-center m-auto",
  },
  {
    id: 2,
    name: "Users",
    value: "23.4k",
    percentage: "+4.9%",
    classNames:
      "bg-rose-400 text-white h-14 w-15 rounded-lg flex justify-center items-center m-auto",
  },
  {
    id: 3,
    name: "Products",
    value: "23.4k",
    percentage: "+4.9%",
    classNames:
      "bg-slate-900 text-white h-14 w-15 rounded-lg flex justify-center items-center m-auto",
  },
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

export const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

export const salesData = [
  {
    name: "Jul",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Aug",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sep",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Oct",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Nov",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Dec",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const revenueData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const dataEx = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
