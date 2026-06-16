import "./layout.scss";
import React from "react";
// import Sidebar from "../sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <div className="App">
      <TopBar />
      {/* <Sidebar /> */}
      <main className="main-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
