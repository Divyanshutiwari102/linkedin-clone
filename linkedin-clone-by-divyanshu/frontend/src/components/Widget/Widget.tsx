// src/components/Widget/Widget.tsx
import { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

type NewsItem = {
  title: string;
  subtitle: string;
};

export default function Widget() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Mocked news (you can connect to API later if needed)
    setNews([
      { title: "LinkedIn launches new AI tools", subtitle: "Top news · 1,234 readers" },
      { title: "React 19 is here!", subtitle: "Technology · 9,876 readers" },
      { title: "AI jobs growing rapidly in India", subtitle: "Career · 7,540 readers" },
      { title: "OpenAI GPT-5 release sparks excitement", subtitle: "Innovation · 12,340 readers" },
    ]);
  }, []);

  return (
    <aside className="hidden lg:flex flex-col bg-white dark:bg-customBlack-800 rounded-lg shadow-md p-4 w-80 h-fit sticky top-20 border border-gray-200 dark:border-customBlack-700">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-customBlack-700 dark:text-white">
          LinkedIn News
        </h2>
        <FiInfo className="text-gray-500 dark:text-gray-300" />
      </div>

      <ul className="space-y-3">
        {news.map((item, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 hover:bg-gray-100 dark:hover:bg-customBlack-700 p-2 rounded-lg cursor-pointer transition"
          >
            <BsDot className="text-xl text-blue-500 mt-[2px]" />
            <div>
              <h3 className="text-sm font-semibold text-customBlack-700 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
        Show more
      </button>
    </aside>
  );
}
