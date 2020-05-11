import { Model, DataTypes, Sequelize, BuildOptions } from 'sequelize';
import IPost from '../../../shared/interfaces/IPost';

type PostsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IPost;
};

export default function Posts(sequelize: Sequelize) {
    const Posts = <PostsStatic>sequelize.define('posts', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        subtitle: {
            type: DataTypes.STRING(255),
            allowNull: true,
        }
    });
    return Posts;
}