import { Observable } from 'tns-core-modules/data/observable';
import { Base64 } from 'nativescript-base64';

export class HelloWorldModel extends Observable {
  public message: string;
  private base64: Base64;

  constructor() {
    super();

    this.base64 = new Base64();
    this.message = this.base64.message;
  }
}
