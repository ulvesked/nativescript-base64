var Base64 = require("nativescript-base64").Base64;
var base64 = new Base64();

describe("greet function", function() {
    it("exists", function() {
        expect(base64.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(base64.greet()).toEqual("Hello, NS");
    });
});