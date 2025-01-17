import "./globals.css";
import { UsersContext } from "./store/store";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Majelan technical assessment",
  description: "Majelan technical assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UsersContext>{children}</UsersContext>
      </body>
    </html>
  );
}
