import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

// const user = User.buildUser({ id: 1, name: 'newerrr name' });
// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();
// user.save();

const collection = User.buildUserCollection();
collection.fetch();
console.log(collection.models);
