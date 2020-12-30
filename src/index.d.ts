export declare function base64UrlToBase64(input: string): string;
export declare function base64ToBase64Url(input: string): string;
export interface Base64Options {
    lineLength?: 64 | 76;
    lineFeedCR?: boolean;
    lineFeedLF?: boolean;
    format?: "base64" | "base64url";
}
export declare function encode(data: string | ArrayBuffer): any;
export declare function encode(data: string | ArrayBuffer, options: Base64Options): any;
export declare function encode(data: string | ArrayBuffer, format: "base64" | "base64url"): any;
export declare function encode(data: string | ArrayBuffer, format: "base64" | "base64url", options: Base64Options): any;
export declare function decode(data: string): any;
export declare function decode(data: string, options: Base64Options): any;
export declare function decode(data: string, format: "base64" | "base64url"): any;
export declare function decode(data: string, format: "base64" | "base64url", options: Base64Options): any;
export declare function decodeToArrayBuffer(data: string);
export declare function decodeToArrayBuffer(data: string, options: Base64Options);
export declare function decodeToArrayBuffer(data: string, format: "base64" | "base64url");
export declare function decodeToArrayBuffer(data: string, format: "base64" | "base64url", options: Base64Options);
export declare function urlEncode(data: string, options?: Base64Options): any;
export declare function urlDecode(data: string, options?: Base64Options): any;
