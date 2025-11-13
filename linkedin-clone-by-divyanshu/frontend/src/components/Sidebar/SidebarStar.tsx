// ✅ SidebarStar.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import { FaStar } from "react-icons/fa";
//import "../../styles/sidebar.css";

type Props = {
  title: string;
  number: number | string;
};

export default function SidebarStar({ title, number }: Props) {
  return (
    <div className="sidebar-star">
      <div className="sidebar-star-left">
        <FaStar className="star-icon" />
        <p>{title}</p>
      </div>
      <span>{number}</span>
    </div>
  );
}
