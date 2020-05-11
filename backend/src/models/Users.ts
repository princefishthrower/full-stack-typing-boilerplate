import { Model, DataTypes, Sequelize, BuildOptions } from 'sequelize';
import IUser from '../../../shared/interfaces/IUser';

type UsersStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): IUser;
};

export default function Users(sequelize: Sequelize) {
    const Users = <UsersStatic>sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    });
    return Users;
}