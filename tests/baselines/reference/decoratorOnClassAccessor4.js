//// [decoratorOnClassAccessor4.ts]
declare function dec<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;

class C {
    @dec set accessor(value: number) { }
}

//// [decoratorOnClassAccessor4.js]
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var C = /** @class */ (function () {
    function C() {
    }
    Object.defineProperty(C.prototype, "accessor", {
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    __decorate([
        dec
    ], C.prototype, "accessor", null);
    return C;
}());
