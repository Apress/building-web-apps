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
    var CustomerBase_1, CustomerSilver;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerSilver = /** @class */ (function (_super) {
                __extends(CustomerSilver, _super);
                function CustomerSilver() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Silver Customer";
                    _this.numberOfYearsCustomer = 10;
                    return _this;
                }
                return CustomerSilver;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerSilver", CustomerSilver);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTaWx2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ3VzdG9tZXJTaWx2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQW9DLGtDQUFZO2dCQUFoRDtvQkFBQSxxRUFHQztvQkFGRyxVQUFJLEdBQUcsaUJBQWlCLENBQUM7b0JBQ3pCLDJCQUFxQixHQUFHLEVBQUUsQ0FBQzs7Z0JBQy9CLENBQUM7Z0JBQUQscUJBQUM7WUFBRCxDQUFDLEFBSEQsQ0FBb0MsMkJBQVksR0FHL0M7O1FBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbWVyQmFzZSB9IGZyb20gXCIuL0N1c3RvbWVyQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTaWx2ZXIgZXh0ZW5kcyBDdXN0b21lckJhc2Uge1xuICAgIG5hbWUgPSBcIlNpbHZlciBDdXN0b21lclwiO1xuICAgIG51bWJlck9mWWVhcnNDdXN0b21lciA9IDEwO1xufVxuIl19