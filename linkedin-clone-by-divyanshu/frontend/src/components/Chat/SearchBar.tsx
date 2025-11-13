// src/components/Chat/SearchBar.tsx
import { FaSearch } from "react-icons/fa";

type Props = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: Props) {
  return (
    <div className="flex items-center px-3 py-2 bg-gray-50 dark:bg-customBlack-700 border-b border-gray-300 dark:border-customBlack-600">
      <FaSearch className="text-gray-400 dark:text-gray-300 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-sm text-gray-700 dark:text-white"
      />
    </div>
  );
}
