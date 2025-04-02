import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Zort's powerful features for advanced betting analytics and tracking.",
};
export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
