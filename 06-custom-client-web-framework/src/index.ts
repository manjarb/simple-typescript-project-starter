import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
import { UserEdit } from './views/UserEdit';

// const user = User.buildUser({ id: 1, name: 'newerrr name' });
// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();
// user.save();

// const collection = User.buildUserCollection();
// collection.fetch();
// console.log(collection.models);

const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(
    root,
    User.buildUser({ name: 'Name', age: 20 })
  );
  userEdit.render();
} else {
  throw new Error('Root element not found');
}
