//// [decoratorMetadataGenericTypeVariableInScope.ts]
// Unused, but could collide with the named type argument below.
class TypeVariable {}

export class C<TypeVariable> {
  @Decorate
  member: TypeVariable;
}


//// [decoratorMetadataGenericTypeVariableInScope.js]
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
// Unused, but could collide with the named type argument below.
var TypeVariable = /** @class */ (function () {
    function TypeVariable() {
    }
    return TypeVariable;
}());
var C = /** @class */ (function () {
    function C() {
    }
    __decorate([
        Decorate,
        __metadata("design:type", Object)
    ], C.prototype, "member");
    return C;
}());
exports.C = C;
