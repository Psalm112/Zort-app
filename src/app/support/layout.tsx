import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help and support for ZORT betting analytics platform. Find answers to common questions or connect with our support team.",
};

export default function SupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
