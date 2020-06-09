
function stringToNSData(data: string) {
    return NSString.stringWithString(data).dataUsingEncoding(NSUTF8StringEncoding);
}
function nsStringToString(nsstring: NSString) {
    return nsstring.toString().replace(/\0+$/, '');
}
import { base64ToBase64Url, base64UrlToBase64, Base64Options } from "./base64.common";
export { base64ToBase64Url, base64UrlToBase64, Base64Options };
export function encode(data: string);
export function encode(data: string, options: Base64Options);
export function encode(data: string, format: "base64" | "base64url");
export function encode(data: string, format: "base64" | "base64url", options: Base64Options);
export function encode(data: string, arg1?, arg2?): string {
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
    let result = stringToNSData(data).base64EncodedStringWithOptions(opts);
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
    return nsStringToString(NSString.alloc().initWithDataEncoding(nsdata, NSUTF8StringEncoding));
}
export function urlEncode(data: string, options?: Base64Options) {
    return encode(data, "base64url", options);
}
export function urlDecode(data: string, options?: Base64Options) {
    return decode(data, "base64url", options);
}