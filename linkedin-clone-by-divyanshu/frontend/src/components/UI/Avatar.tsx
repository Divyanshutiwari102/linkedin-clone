// ✅ Avatar.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  url: string;
  alt?: string;
  className?: string;
};

const Avatar: React.FC<Props> = ({ url, alt = "avatar", className = "" }) => {
  return (
    <img
      src={url || "/default avatar.jpg"}
      alt={alt}
      className={`avatar ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export default Avatar;
