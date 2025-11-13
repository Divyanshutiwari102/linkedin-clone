// src/components/Chat/ChatList.tsx
import ChatItem from "./ChatItem";

type Chat = {
  id: string;
  name: string;
  message: string;
  time: string;
};

type Props = {
  chats: Chat[];
  onSelectChat: (id: string) => void;
};

export default function ChatList({ chats, onSelectChat }: Props) {
  return (
    <div className="max-h-64 overflow-y-auto">
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          className="hover:bg-gray-100 dark:hover:bg-customBlack-700 transition cursor-pointer"
        >
          <ChatItem {...chat} />
        </div>
      ))}
    </div>
  );
}
