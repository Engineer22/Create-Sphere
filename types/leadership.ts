export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}