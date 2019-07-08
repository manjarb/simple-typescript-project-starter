import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handers = this.events[eventName] || [];
    handers.push(callback);
    this.events[eventName] = handers;
  }

  trigger(eventName: string): void {
    const handers = this.events[eventName];

    if (!handers || handers.length === 0) {
      return;
    }

    handers.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get('http://localhost:3000/users/' + this.get('id'))
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }

  save(): void {
    const userId = this.get('id');
    const url = 'http://localhost:3000/users/' + userId;
    if (userId) {
      axios.put(url, this.data).then((response: AxiosResponse) => {
        console.log(response, ' :finish put');
      });
    } else {
      axios
        .post('http://localhost:3000/users/', this.data)
        .then((response: AxiosResponse) => {
          console.log(response, ' :finish post');
        });
    }
  }
}
