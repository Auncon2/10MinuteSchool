import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");
}

// import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Your App",
//   description: "Some description",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body>{children}</body>
//     </html>
//   );
// }
