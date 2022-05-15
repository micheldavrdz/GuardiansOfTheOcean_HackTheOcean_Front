import http from '../http-common';

class ExplorerService {
  // eslint-disable-next-line class-methods-use-this
  getAll() {
    return http.get('/HackTheOcean');
  }

  // eslint-disable-next-line class-methods-use-this
  get(animal) {
    return http.get(`/HackTheOcean/${animal}`);
  }
}

export default new ExplorerService();
