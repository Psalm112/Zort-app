import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the perfect plan to elevate your betting strategy with Zort's AI-powered analytics and tools.",
};
export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
