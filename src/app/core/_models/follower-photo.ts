import { UserLike } from './user-like';
import { UserComment } from './user-comment';

export interface FollowerPhoto {
     username: string;
     location: string;
     userImgUrl: string;
     photoUrl: string;
     comments: UserComment[];
     likes: UserLike[];
}