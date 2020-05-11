import DB from "../DB/DB";
import testUsers from '../../test-data/testUsers.json';
import testPosts from '../../test-data/testPosts.json';

// WARNING: note that force: true is used here! If used in production for example this would erase table data!
export async function migrations() {
    try {
        // Create users table and add test data
        await DB.users.sync({ force: true });
        console.log('Users table created successfully');
        await DB.users.bulkCreate(testUsers);
        console.log('Users table test data imported successfully');

        //
        await DB.posts.sync({ force: true });
        console.log('Posts table created successfully');
        await DB.posts.bulkCreate(testPosts);
        console.log('Posts table test data imported successfully');

        console.log('Done! No errors! Closing...');
        await DB.sequelize.close();
        console.log('Done.');

    } catch (err) {
        console.log('An error occur while creating the tables and test data: ' + err);
    }
}
migrations();