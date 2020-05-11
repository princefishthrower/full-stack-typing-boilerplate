export default interface IPost {
    id: number;
    userId: number;
    title: string;
    subtitle: string;

    createdAt: Date;
    updatedAt: Date;
}