import { User } from './models/User';

const user = new User({ id: 1, name: 'newerrr name' });
user.on('change', () => {
  console.log(user);
});

// user.fetch();
user.save();
