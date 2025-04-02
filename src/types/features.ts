import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}


export interface DetailedFeatureProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  graphic: {
    image?: {
      src: string
      alt: string
    }
    chart?:  React.JSX.Element
  }
  reverse?: boolean;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}
