/// <reference path="node_modules/tns-platform-declarations/android/android-platform-28.d.ts" />


import { base64ToBase64Url, base64UrlToBase64, Base64Options } from "./base64.common";
export { base64ToBase64Url, base64UrlToBase64, Base64Options };
export function encode(data: string): any;
export function encode(data: string, options: Base64Options): any;
export function encode(data: string, format: "base64" | "base64url"): any;
export function encode(data: string, format: "base64" | "base64url", options: Base64Options): any;
export function encode(data: string, arg1?, arg2?) {
    let options: Base64Options;
    if (typeof(arg1) === 'string') {
        options = arg2 || {};
        options.format = <any>arg1;
    }
    else {
        options = arg1 || {};
    }
    let opts = 0;
    if (options) {
        // if (options.lineLength === 64) {
        //     opts = opts | android.util.Base64..Encoding64CharacterLineLength;
        // }
        // if (options.lineLength === 76) {
        //     opts = opts | NSDataBase64EncodingOptions.Encoding76CharacterLineLength;
        // }
        // if (options.lineFeedCR) {
        //         opts = opts | NSDataBase64EncodingOptions.EncodingEndLineWithCarriageReturn;
        // }
        // if (options.lineFeedLF) {
        //         opts = opts | NSDataBase64EncodingOptions.EncodingEndLineWithLineFeed;
        // }
    }
    android.util.Base64
}
export function decode(data: string): any;
export function decode(data: string, options: Base64Options): any;
export function decode(data: string, format: "base64" | "base64url"): any;
export function decode(data: string, format: "base64" | "base64url", options: Base64Options): any;
export function decode(data: string, arg1?, arg2?): string {

}
export function urlEncode(data: string, options?: Base64Options): any {

}
export function urlDecode(data: string, options?: Base64Options): any {


}
