// Modified by Divyanshu Tiwari – AppDost Submission
import React from "react";
import Chat from "../components/Chat/Chat";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Widget from "../components/Widget/Widget";

/**
 * ✅ Layout Component
 * Provides the global layout for the app — header, sidebar, feed, widgets, and chat panel.
 */
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-customWhite-40 dark:bg-customBlack-900 text-customBlack-700 dark:text-customWhite-50">
      {/* Top Navigation Bar */}
      <Header />

      {/* Main Layout Area */}
      <div className="flex flex-row justify-center items-start max-w-7xl mx-auto mt-5 gap-6 px-4">
        {/* Sidebar (Left Section) */}
        <Sidebar />

        {/* Central Feed / Content */}
        <main className="flex-1 max-w-3xl flex flex-col gap-4">{children}</main>

        {/* Right Section */}
        <Widget />
      </div>

      {/* Bottom Chat Component */}
      <Chat />
    </div>
  );
}

