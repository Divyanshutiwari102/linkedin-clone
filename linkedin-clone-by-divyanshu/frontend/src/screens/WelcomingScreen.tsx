import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config";
import Button from "../components/UI/Button";

export default function WelcomingScreen() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customWhite-50 dark:bg-customBlack-900 px-6">
      <div className="max-w-2xl bg-white dark:bg-customBlack-800 shadow-lg rounded-2xl p-10 text-center">
        <img
          src="/images/LinkedIn-Logo.wine.png"
          alt="LinkedIn Logo"
          className="w-48 mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold text-customBlack-800 dark:text-white mb-4">
          Welcome {user?.displayName || "Professional"} 👋
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          You’re all set to explore, connect, and grow your professional network.
          Let’s get started by visiting your feed!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-customBlue-950 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Go to Feed
          </Button>

          <Link
            to="/profile"
            className="px-6 py-3 border border-customBlue-950 dark:border-customWhite-50 text-customBlue-950 dark:text-white rounded-lg hover:bg-customBlue-950 hover:text-white transition font-semibold"
          >
            View Profile
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Need to make updates? You can edit your profile anytime.
        </p>
      </div>
    </div>
  );
}
