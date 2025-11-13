// src/components/Chat/Chat.tsx
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import SearchBar from "./SearchBar";
import ChatItem from "./ChatItem";

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const chats = [
    { id: "1", name: "Anjali Sharma", message: "Hey! How are you?", time: "2m" },
    { id: "2", name: "Ravi Kumar", message: "Let's connect soon!", time: "10m" },
    { id: "3", name: "Priya Singh", message: "Got the docs, thanks!", time: "1h" },
  ];

  return (
    <div className="fixed bottom-0 right-6 w-80 bg-white dark:bg-customBlack-800 rounded-t-xl shadow-lg border border-gray-300 dark:border-customBlack-600 overflow-hidden">
      <ChatHeader />
      <SearchBar placeholder="Search messages..." />
      <ChatList chats={chats} onSelectChat={setSelectedChat} />

      {selectedChat && (
        <div className="p-4 border-t dark:border-customBlack-600">
          <ChatItem
            name="Anjali Sharma"
            message="This is the start of your conversation."
            time="Now"
          />
        </div>
      )}
    </div>
  );
}
