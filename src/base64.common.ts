export function base64UrlToBase64(input: string) {
    console.log({ len: input.length, mod: input.length % 4 });
    let padLength = input.length % 4;
    return input.replace(/\-/g, '+').replace(/_/g, '/') + ("=".repeat(4 - (input.length % 4)));
}
export function base64ToBase64Url(input: string) {
    return input.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
export interface Base64Options {
    lineLength?: 64 | 76;
    lineFeedCR?: boolean;
    lineFeedLF?: boolean;
    format?: "base64" | "base64url";
}