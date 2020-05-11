import Users from "../models/Users";
import Posts from "../models/Posts";
import { Sequelize } from "sequelize";

class DB {
    // create sequelize connection
    public static readonly sequelize = new Sequelize(
        process.env.FULL_STACK_TYPING_DB_NAME,
        process.env.FULL_STACK_TYPING_DB_USER,
        process.env.FULL_STACK_TYPING_DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
        },
    );

    // initialize models by passing sequelize into our model definition functions
    public static readonly users = Users(DB.sequelize);
    public static readonly posts = Posts(DB.sequelize);
}

function setRelations(): void {
    /////////////////
    // One-To-Many //
    /////////////////

    // Users and Posts One-To-Many Relationship
    DB.users.hasMany(DB.posts, { foreignKey: 'userId' });
    DB.posts.belongsTo(DB.users, { foreignKey: 'userId' });
}

setRelations();

export default DB;