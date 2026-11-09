import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import { SoundProvider } from "@/components/UI/SoundManager";
import { Navbar } from "@/components/Navigation/Navbar";
import { CustomCursor } from "@/components/Navigation/CustomCursor";
import { SmoothScrollProvider } from "@/components/UI/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "SRA NEURAL — Shaikh Zubaid Hussain • Rahul Patar • Ashish Das | 1st Year B.Tech CSE",
  description:
    "Official Portfolio of SRA NEURAL: Shaikh Zubaid Hussain (Cybersecurity & Ethical Hacking), Rahul Patar (AI/ML & Neural Vision), and Ashish Das (CSE Core & Systems Design). 1st Year B.Tech CSE collective engineering high-performance flagships.",
  keywords: [
    "SRA NEURAL",
    "Shaikh Zubaid Hussain",
    "Rahul Patar",
    "Ashish Das",
    "Cybersecurity",
    "Ethical Hacking",
    "Penetration Testing",
    "Network Intrusion Detection",
    "Neural Networks",
    "PyTorch",
    "OpenCV",
    "Core Systems",
    "Compilers",
    "Distributed Systems",
    "C++",
    "DaVinci Resolve",
    "Next.js 14",
    "60 FPS Canvas",
  ],
  authors: [{ name: "SRA NEURAL (Shaikh Zubaid Hussain, Rahul Patar, Ashish Das)" }],
  creator: "SRA NEURAL",
  openGraph: {
    title: "SRA NEURAL — Shaikh Zubaid Hussain • Rahul Patar • Ashish Das",
    description:
      "Three Minds. Security Architecture. Neural Intelligence. Core Computer Systems. 1st Year B.Tech CSE Collective.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-[#f5f5f5] antialiased selection:bg-brand-crimson selection:text-white">
        <SmoothScrollProvider>
          <ModeProvider>
            <SoundProvider>
              <CustomCursor />
              <Navbar />
              <main className="relative">{children}</main>
            </SoundProvider>
          </ModeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
