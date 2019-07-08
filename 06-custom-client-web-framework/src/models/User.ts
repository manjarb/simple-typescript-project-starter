interface UserProps {
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
}
