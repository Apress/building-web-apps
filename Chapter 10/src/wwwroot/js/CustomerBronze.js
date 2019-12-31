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
    var CustomerBase_1, CustomerBronze;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerBronze = /** @class */ (function (_super) {
                __extends(CustomerBronze, _super);
                function CustomerBronze() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Bronze Customer";
                    _this.numberOfYearsCustomer = 5;
                    return _this;
                }
                return CustomerBronze;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerBronze", CustomerBronze);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCcm9uemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ3VzdG9tZXJCcm9uemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQW9DLGtDQUFZO2dCQUFoRDtvQkFBQSxxRUFHQztvQkFGRyxVQUFJLEdBQUcsaUJBQWlCLENBQUM7b0JBQ3pCLDJCQUFxQixHQUFHLENBQUMsQ0FBQzs7Z0JBQzlCLENBQUM7Z0JBQUQscUJBQUM7WUFBRCxDQUFDLEFBSEQsQ0FBb0MsMkJBQVksR0FHL0M7O1FBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbWVyQmFzZSB9IGZyb20gXCIuL0N1c3RvbWVyQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJCcm9uemUgZXh0ZW5kcyBDdXN0b21lckJhc2Uge1xuICAgIG5hbWUgPSBcIkJyb256ZSBDdXN0b21lclwiO1xuICAgIG51bWJlck9mWWVhcnNDdXN0b21lciA9IDU7XG59XG4iXX0=