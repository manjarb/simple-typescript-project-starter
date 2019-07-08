import { User } from './models/User';

const user = new User({ id: 1 });
user.fetch();
// user.set({ name: 'new name', age: 999 });
// user.on('change', () => {
//   console.log('C1');
// });
// user.on('change', () => {
//   console.log('C2');
// });
// user.on('save', () => {
//   console.log('S1');
// });

// user.trigger('change');
