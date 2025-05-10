import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: "%s | AFOR Organization | Rwandan Trusted NGO",
    default: "AFOR Organization",
  },
  description:
    "AFOR is a Rwandan NGO dedicated to maintaining the environment and helping people. Our mission is to promote sustainability and support communities in need.",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
      <div>
        <Toaster />
      </div>
    </html>
  );
}
