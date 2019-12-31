System.register([], function (exports_1, context_1) {
    "use strict";
    var Product;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Product = /** @class */ (function () {
                function Product(nameValue, basePriceValue) {
                    this.name = "";
                    this.basePrice = 0.0;
                    this.name = nameValue;
                    this.basePrice = basePriceValue;
                }
                Product.prototype.currentPrice = function (customer) {
                    var discount = this.basePrice * customer.discountPercent();
                    return this.basePrice - discount;
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQTtnQkFLSSxpQkFBWSxTQUFpQixFQUFFLGNBQXNCO29CQUhyRCxTQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNGLGNBQVMsR0FBRyxHQUFHLENBQUM7b0JBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCw4QkFBWSxHQUFaLFVBQWEsUUFBbUI7b0JBQzVCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzRCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUNyQyxDQUFDO2dCQUNMLGNBQUM7WUFBRCxDQUFDLEFBZEQsSUFjQzs7UUFHRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi9JUHJvZHVjdFwiO1xuaW1wb3J0IHsgSUN1c3RvbWVyIH0gZnJvbSBcIi4vSUN1c3RvbWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0IGltcGxlbWVudHMgSVByb2R1Y3Qge1xuXG4gICAgbmFtZSA9IFwiXCI7XG4gICAgcHJpdmF0ZSBiYXNlUHJpY2UgPSAwLjA7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lVmFsdWU6IHN0cmluZywgYmFzZVByaWNlVmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lVmFsdWU7XG4gICAgICAgIHRoaXMuYmFzZVByaWNlID0gYmFzZVByaWNlVmFsdWU7XG4gICAgfVxuXG4gICAgY3VycmVudFByaWNlKGN1c3RvbWVyOiBJQ3VzdG9tZXIpIHtcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gdGhpcy5iYXNlUHJpY2UgKiBjdXN0b21lci5kaXNjb3VudFBlcmNlbnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVByaWNlIC0gZGlzY291bnQ7XG4gICAgfVxufVxuXG5cbiJdfQ==