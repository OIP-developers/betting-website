"use client"; // Allows usePathname()

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current route

  // Define routes where you want to hide Header & Footer
  const hiddenRoutes = ["/login", "/register", "/forgotPassword", "/call"];

  return (
    <>
      {!hiddenRoutes.includes(pathname) && <Header />}
      {children}
      {!hiddenRoutes.includes(pathname) && <Footer />}
    </>
  );
}
