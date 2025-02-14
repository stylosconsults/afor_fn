import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Afor dashboard",
    default: "Afor dashboard",
  },
  description:
    "Afor Dashboard is dedicated to control the all dynamic operation happen to afor web application.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
