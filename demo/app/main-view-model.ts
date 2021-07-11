import { Observable } from '@nativescript/core';
import * as base64 from 'nativescript-base64';
import { getViewById } from 'tns-core-modules/ui/page/page';

export class HelloWorldModel extends Observable {
 
  private getValue(fieldID, args) {
    return (getViewById(args.object.page, fieldID) as any).text;
  }
  private setValue(fieldID, value, args) {
    (getViewById(args.object.page, fieldID) as any).text = value;
  }
  encode(args) {
    console.log('encode');
    let plaintext = this.getValue("plaintext", args);
    let base64_encoded = base64.encode(plaintext);
    let base64url_encoded = base64.urlEncode(plaintext);
    this.setValue("base64", base64_encoded, args);
    this.setValue("base64url", base64url_encoded, args);
    console.log({ plaintext, base64_encoded, base64url_encoded  });
  }
  decodeBase64(args) {
    console.log('decodeBase64');
    let payload = this.getValue("base64", args);
    let plaintext = base64.decode(payload);
    let base64url_encoded = base64.base64ToBase64Url(payload);
    this.setValue("base64url", base64url_encoded, args);
    this.setValue("plaintext", plaintext, args);
    console.log({ plaintext, payload, base64url_encoded, plaintext_type: typeof(plaintext), plaintext_string: plaintext.toString() });
  }
  decodeBase64Url(args) {
    console.log('decodeBase64Url');
    let payload = this.getValue("base64url", args);
    let plaintext = base64.urlDecode(payload);
    let base64_encoded = base64.base64UrlToBase64(payload);
    this.setValue("base64", base64_encoded, args);
    this.setValue("plaintext", plaintext, args);
    console.log({ plaintext, base64_encoded, payload, plaintext_type: typeof(plaintext), plaintext_string: plaintext.toString() });
  }
}