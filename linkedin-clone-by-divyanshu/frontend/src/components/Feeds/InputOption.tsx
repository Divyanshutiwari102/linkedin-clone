// ✅ InputOption.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import "../../styles/feed.css";

type Props = {
  Icon: React.ElementType;
  color?: string;
  title: string;
  onClick?: () => void;
};

export default function InputOption({ Icon, color, title, onClick }: Props) {
  return (
    <div className="input-option" onClick={onClick}>
      <Icon className="input-option-icon" style={{ color }} />
      <p className="input-option-title">{title}</p>
    </div>
  );
}
