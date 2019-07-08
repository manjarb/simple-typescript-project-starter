import axios, { AxiosPromise } from 'axios';

interface HasId {
  id: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(this.rootUrl + '/' + id);
  }

  save(data: T): AxiosPromise {
    const url = this.rootUrl + '/' + data.id;
    if (data.id) {
      return axios.put(url, data);
    } else {
      return axios.post(this.rootUrl + '/', data);
    }
  }
}
