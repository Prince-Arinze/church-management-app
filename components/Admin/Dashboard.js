import { useState } from "react";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };
  return (
    <div className="container">
      <Navbar sidebarToggle={sidebarToggle} handleToggle={handleToggle} />
      <Main />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
