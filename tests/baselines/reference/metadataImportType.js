//// [metadataImportType.ts]
export class A {
    @test
    b: import('./b').B
}

//// [metadataImportType.js]
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
    }
    __decorate([
        test,
        __metadata("design:type", Object)
    ], A.prototype, "b");
    return A;
}());
exports.A = A;
