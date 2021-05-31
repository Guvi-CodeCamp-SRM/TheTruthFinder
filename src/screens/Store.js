import {observable, makeAutoObservable} from 'mobx';

class Store {
  Result = '';
  Heading = '';
  constructor() {
    makeAutoObservable(this);
  }

  setResult(res) {
    this.Result = res;
  }
  setHeading(head) {
    this.Heading = head;
  }

  @observable input = '';
  @observable val = '';
}

export default new Store();
