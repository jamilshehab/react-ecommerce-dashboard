export interface HeaderProps {
  title: string;
}

export interface CardProps {
  title: string;
  content: string;
  value: string;
  icon: any;
  classNames: string;
}
export interface PieChartsProps {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
  index: any;
}

export interface TableContentProps {
  name: string;
  orderId: string;
  orderDate: any;
  price: number;
  weight: number;
  description: string;
  dimentions: string;
  status: string;
}
