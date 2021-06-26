import { Tweet } from './Tweet';

export class TwitterUser {
  name?: string;
  publicMatrices?: {
    tweetCount: number,
    followersCount: number,
    followingCount: number,
    listedCount: number
  };
  location?: string;
  description?: string;
  profileImageUrl?: string;
  id?: number;
  userName?: string;
  hashTag?: string;
  url?: string;
  protected?: boolean;
  entities?: any;
  tweetList?: Tweet[];
  tweetMatrix?: Map<string, number>;
}

export type PartialTwitterUser = Partial<TwitterUser>;
export type FullTwitterUser = Required<TwitterUser>;
