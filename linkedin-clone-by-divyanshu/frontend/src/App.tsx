// ✅ App.tsx — Pure CSS version
import React from "react";
import RouteLayout from "./Routes";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <RouteLayout />
    </div>
  );
};

export default App;
