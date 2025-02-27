"use client"; 

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hiddenRoutes = ["/login", "/register", "/forgotPassword", "/call",'/profileHeader'];

  return (
    <>
      {!hiddenRoutes.includes(pathname) && <Header />}
      {children}
      {!hiddenRoutes.includes(pathname) && <Footer />}
    </>
  );
}
