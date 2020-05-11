import IUser from './IUser';
import IPost from './IPost';

export default interface IUserWithPosts extends IUser {
    posts: Array<IPost>;
}