export type SocialPlatform = "instagram" | "facebook" | "youtube" | "tiktok" | "twitter" | "x";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}
