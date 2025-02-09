import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async id="toolbar-script" data-toolbar-api-key="405c8675-7e26-4fd7-b922-a06a842ac3a8" src="https://get.usetool.bar/embedded-app.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
