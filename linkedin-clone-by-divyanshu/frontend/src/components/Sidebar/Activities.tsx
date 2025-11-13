// src/components/Sidebar/Activities.tsx
export default function Activities() {
  const activities = [
    "ArtificialIntelligence",
    "WebDevelopment",
    "CloudComputing",
    "MachineLearning",
    "OpenSource",
  ];

  return (
    <div className="p-3 border rounded-lg dark:border-customBlack-600 bg-white dark:bg-customBlack-800 mt-3">
      <h3 className="font-semibold mb-3 text-customBlack-700 dark:text-customWhite-50">
        Recent Activities
      </h3>
      <div className="space-y-2">
        {activities.map((item, index) => (
          <p
            key={index}
            className="text-sm text-customBlue-950 dark:text-customWhite-200 cursor-pointer hover:underline"
          >
            #{item}
          </p>
        ))}
      </div>
    </div>
  );
}
