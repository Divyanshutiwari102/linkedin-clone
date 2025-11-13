import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

export default function NotFoundScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customWhite-50 dark:bg-customBlack-900 text-center px-6">
      <div className="max-w-lg bg-white dark:bg-customBlack-800 rounded-2xl shadow-lg p-10">
        <img
          src="/images/404-illustration.png"
          alt="404 Not Found"
          className="w-60 mx-auto mb-8"
          onError={(e) => {
            // fallback if image is missing
            (e.currentTarget as HTMLImageElement).src = "/images/linkedin-b.png";
          }}
        />

        <h1 className="text-4xl font-bold text-customBlack-800 dark:text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link to="/">
          <Button className="bg-customBlue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
