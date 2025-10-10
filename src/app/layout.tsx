import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header/page";

import "./globals.css";

export const metadata: Metadata = {
  title: "Espresso",
  description: "Espresso Frappe Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <SidebarTrigger />
              <main className="flex-1 p-6 overflow-auto">
                <Header />
                {children}
                <Toaster />
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
