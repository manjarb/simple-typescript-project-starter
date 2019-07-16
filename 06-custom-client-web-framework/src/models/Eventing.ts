type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handers = this.events[eventName] || [];
    handers.push(callback);
    this.events[eventName] = handers;
  };

  trigger = (eventName: string): void => {
    const handers = this.events[eventName];
    if (!handers || handers.length === 0) {
      return;
    }

    handers.forEach(callback => {
      callback();
    });
  };
}
