import { Tweet } from '@seagull/core/models/Tweet';

export class TwitterUser {
  name: string;
  publicMatrices: {
    tweetCount: number,
    followersCount: number,
    followingCount: number,
    listedCount: number
  };
  location?: string;
  description?: string;
  profileImageUrl?: string;
  id: number;
  userName?: string;
  hashTag?: string;
  url?: string;
  protected: boolean;
  entities?: any;
  tweetList: Tweet[];
  tweetMatrix?: Map<string, number>;
}
