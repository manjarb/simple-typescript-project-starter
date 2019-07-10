import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'newerrr name' });
user.on('change', () => {
  console.log(user);
});

user.fetch();
// user.save();
