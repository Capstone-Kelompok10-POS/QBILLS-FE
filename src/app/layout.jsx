import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";
import { NextAuthProvider } from "@/libs";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "QBills | Landing Page",
  description: "Elevate your sales strategy and delight customers with our state-of-the-art POS application, offering a seamless and user-friendly interface for enhanced transactions. Qbills is here to be a solution for your business, features are available to make your work easier, use it now.",
};

const RootLayout = ({ children }) => {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={openSans.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
