import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  // Pull the user from userSlice
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
