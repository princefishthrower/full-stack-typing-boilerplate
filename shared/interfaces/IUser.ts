export default interface IUser {
    id: number;
    email: string;
    password: string;
    username: string;

    createdAt: Date;
    updatedAt: Date;
}