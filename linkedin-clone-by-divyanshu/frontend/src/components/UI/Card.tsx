// ✅ Card.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import { cn } from "../../lib/utils";
type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = ({ children, className = "" }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
