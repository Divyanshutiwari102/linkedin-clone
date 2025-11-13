// src/components/Header/HeaderOption.tsx
import React from "react";
import { cn } from "..//../lib/utils";

interface HeaderOptionProps {
  Icon?: React.ElementType;
  avatar?: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

const HeaderOption: React.FC<HeaderOptionProps> = ({
  Icon,
  avatar,
  title,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col items-center text-gray-600 cursor-pointer hover:text-customBlue-950 dark:text-white dark:hover:text-customWhite-40 transition duration-200",
        className
      )}
    >
      {Icon && <Icon className="h-6 w-6 mb-1" />}
      {avatar && (
        <img
          src={avatar}
          alt="Profile"
          className="h-6 w-6 rounded-full mb-1 border border-gray-400"
        />
      )}
      <h4 className="text-sm">{title}</h4>
    </div>
  );
};

export default HeaderOption;
