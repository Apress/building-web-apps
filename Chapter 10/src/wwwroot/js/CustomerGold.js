System.register(["./CustomerBase"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var CustomerBase_1, CustomerGold;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerGold = /** @class */ (function (_super) {
                __extends(CustomerGold, _super);
                function CustomerGold() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Gold Customer";
                    _this.numberOfYearsCustomer = 15;
                    return _this;
                }
                CustomerGold.prototype.discountPercent = function () {
                    return .20;
                };
                return CustomerGold;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerGold", CustomerGold);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJHb2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0N1c3RvbWVyR29sZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBa0MsZ0NBQVk7Z0JBQTlDO29CQUFBLHFFQU1DO29CQUxHLFVBQUksR0FBRyxlQUFlLENBQUM7b0JBQ3ZCLDJCQUFxQixHQUFHLEVBQUUsQ0FBQzs7Z0JBSS9CLENBQUM7Z0JBSEcsc0NBQWUsR0FBZjtvQkFDSSxPQUFPLEdBQUcsQ0FBQztnQkFDZixDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0FBQyxBQU5ELENBQWtDLDJCQUFZLEdBTTdDOztRQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lckJhc2UgfSBmcm9tIFwiLi9DdXN0b21lckJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyR29sZCBleHRlbmRzIEN1c3RvbWVyQmFzZSB7XG4gICAgbmFtZSA9IFwiR29sZCBDdXN0b21lclwiO1xuICAgIG51bWJlck9mWWVhcnNDdXN0b21lciA9IDE1O1xuICAgIGRpc2NvdW50UGVyY2VudCgpIHtcbiAgICAgICAgcmV0dXJuIC4yMDtcbiAgICB9XG59XG4iXX0=