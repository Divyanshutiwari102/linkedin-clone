// src/components/UI/CircleIcon.tsx
import React from "react";

type Props = {
  color?: string;
  size?: number;
  className?: string;
};

export default function CircleIcon({
  color = "green",
  size = 10,
  className = "",
}: Props) {
  return (
    <span
      className={`inline-block rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
}
