// src/components/Chat/ChatHeader.tsx
import { IoMdClose } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-customBlack-700 border-b border-gray-300 dark:border-customBlack-600">
      <div className="flex items-center space-x-2">
        <BsChatDots className="text-customBlue-950 dark:text-white text-lg" />
        <h3 className="font-semibold text-customBlack-700 dark:text-white text-sm">
          Messaging
        </h3>
      </div>
      <IoMdClose className="text-lg cursor-pointer text-gray-500 hover:text-red-500 transition" />
    </div>
  );
}
