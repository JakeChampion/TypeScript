//// [classExpressionWithDecorator1.ts]
var v = @decorate class C { static p = 1 };

//// [classExpressionWithDecorator1.js]
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var v = ;
var C = /** @class */ (function () {
    function C() {
    }
    C.p = 1;
    C = __decorate([
        decorate
    ], C);
    return C;
}());
;
