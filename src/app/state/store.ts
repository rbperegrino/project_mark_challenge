import {signal, WritableSignal} from "@angular/core";


export class Store<T> {
  private state: WritableSignal<T>;

  constructor(initialState: T) {
    this.state = signal(initialState)
  }

  public select() {
    return this.state;
  }

  public update(value: string) {
    console.log(value)
  }
}
