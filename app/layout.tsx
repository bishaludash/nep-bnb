import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/UI/Navbar";
interface ILayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Nepbnb | Find the perfect rental",
  description: "Find the perfect rental",
};
const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
