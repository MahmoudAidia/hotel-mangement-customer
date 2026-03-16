import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  // title: "The Wild Oasis: hotel inside the wild ",
  title: {
    template: "%s / The Wild Oasis", // %s will be replaced with each metadata title from other pages like cabins or about
    default: "Welcome / The Wild Oasis", // This will be the default value of we didn't export a metadata title from any page
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests ", // important for SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
