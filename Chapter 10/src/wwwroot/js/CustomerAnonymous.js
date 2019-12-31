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
    var CustomerBase_1, CustomerAnonymous;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerAnonymous = /** @class */ (function (_super) {
                __extends(CustomerAnonymous, _super);
                function CustomerAnonymous() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "asdf Valued Customer";
                    return _this;
                }
                return CustomerAnonymous;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerAnonymous", CustomerAnonymous);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBbm9ueW1vdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ3VzdG9tZXJBbm9ueW1vdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQXVDLHFDQUFZO2dCQUFuRDtvQkFBQSxxRUFFQztvQkFERyxVQUFJLEdBQUcsc0JBQXNCLENBQUM7O2dCQUNsQyxDQUFDO2dCQUFELHdCQUFDO1lBQUQsQ0FBQyxBQUZELENBQXVDLDJCQUFZLEdBRWxEOztRQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lckJhc2UgfSBmcm9tIFwiLi9DdXN0b21lckJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQW5vbnltb3VzIGV4dGVuZHMgQ3VzdG9tZXJCYXNlIHtcbiAgICBuYW1lID0gXCJhc2RmIFZhbHVlZCBDdXN0b21lclwiO1xufVxuIl19