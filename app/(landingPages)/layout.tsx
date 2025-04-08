import type { Metadata } from "next";
import Script from "next/script";
import Footer from "../appComponents/footer";
import Navbar from "../appComponents/navbar/navbar";
import Contact from "../appComponents/contact";
import "./../globals.css";
import { WhatsAppButton } from "../appComponents/tsapButton";
import { SmsButton } from "../appComponents/smsButton";

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
      <head>
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/679897683a8427326075bcf9/1iim0usd2';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body>
        <div>
          <div className="z-50 relative ">
            <Navbar />
          </div>
        </div>
        {children}
      </body>
      <div>
        <WhatsAppButton
          phoneNumber="+250788303907"
          message="Hi! I would like to know more about your services."
        />
        <SmsButton
          phoneNumber="+250788303907"
          message="Hi! I would like to know more about your services."
        />
        <Contact />
        <Footer />
      </div>
    </html>
  );
}
