export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}