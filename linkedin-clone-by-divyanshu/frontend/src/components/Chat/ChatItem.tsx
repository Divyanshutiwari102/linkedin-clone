// src/components/Chat/ChatItem.tsx
type Props = {
  name: string;
  message: string;
  time: string;
};

export default function ChatItem({ name, message, time }: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-customBlack-700">
      <div>
        <h4 className="font-semibold text-customBlack-700 dark:text-white text-sm">
          {name}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{message}</p>
      </div>
      <span className="text-xs text-gray-400 dark:text-gray-300">{time}</span>
    </div>
  );
}
