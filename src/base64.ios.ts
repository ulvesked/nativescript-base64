
function stringToNSData(data: string) {
    return NSString.stringWithString(data).dataUsingEncoding(NSUTF8StringEncoding);
}
function nsStringToString(nsstring: NSString) {
    return nsstring.toString().replace(/\0+$/, '');
}
import { base64ToBase64Url, base64UrlToBase64, Base64Options } from "./base64.common";
export { base64ToBase64Url, base64UrlToBase64, Base64Options };
export function encode(data: string | ArrayBuffer);
export function encode(data: string | ArrayBuffer, options: Base64Options);
export function encode(data: string | ArrayBuffer, format: "base64" | "base64url");
export function encode(data: string | ArrayBuffer, format: "base64" | "base64url", options: Base64Options);
export function encode(data: string | ArrayBuffer, arg1?, arg2?): string {
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
        if (options.lineLength === 64) {
            opts = opts | NSDataBase64EncodingOptions.Encoding64CharacterLineLength;
        }
        if (options.lineLength === 76) {
            opts = opts | NSDataBase64EncodingOptions.Encoding76CharacterLineLength;
        }
        if (options.lineFeedCR) {
                opts = opts | NSDataBase64EncodingOptions.EncodingEndLineWithCarriageReturn;
        }
        if (options.lineFeedLF) {
                opts = opts | NSDataBase64EncodingOptions.EncodingEndLineWithLineFeed;
        }
    }
    let nsdata: NSData;
    if (data instanceof ArrayBuffer) {
        nsdata = NSData.dataWithData(<any>data);
    } 
    else if (typeof data == "string") {
        nsdata = stringToNSData(data);
    }
    else {
        return undefined;   
    }
    let result = nsdata.base64EncodedStringWithOptions(opts);
    if (options && options.format === "base64url") {
        result = base64ToBase64Url(result);
    }
    return result;
}
export function decode(data: string);
export function decode(data: string, options: Base64Options);
export function decode(data: string, format: "base64" | "base64url");
export function decode(data: string, format: "base64" | "base64url", options: Base64Options);
export function decode(data: string, arg1?, arg2?): string {
    const nsdata = decodeToNSData(data, arg1, arg2);
    return nsStringToString(NSString.alloc().initWithDataEncoding(nsdata, NSUTF8StringEncoding));
}
function decodeToNSData(data: string, arg1?, arg2?): NSData {
    let options: Base64Options;
    if (typeof(arg1) === 'string') {
        options = arg2 || {};
        options.format = <any>arg1;
    }
    else {
        options = arg1 || {};
    }
    let opts = NSDataBase64DecodingOptions.IgnoreUnknownCharacters;
    if (options && options.format === "base64url") {
        data = base64UrlToBase64(data);
    }
    let nsdata = NSData.alloc().initWithBase64EncodedStringOptions(data, opts);
    return nsdata;
}
export function decodeToArrayBuffer(data: string);
export function decodeToArrayBuffer(data: string, options: Base64Options);
export function decodeToArrayBuffer(data: string, format: "base64" | "base64url");
export function decodeToArrayBuffer(data: string, format: "base64" | "base64url", options: Base64Options);
export function decodeToArrayBuffer(data: string, arg1?, arg2?): ArrayBuffer {
    let nsdata = decodeToNSData(data, arg1, arg2);
    return interop.bufferFromData(nsdata);
}
export function urlEncode(data: string, options?: Base64Options) {
    return encode(data, "base64url", options);
}
export function urlDecode(data: string, options?: Base64Options) {
    return decode(data, "base64url", options);
}