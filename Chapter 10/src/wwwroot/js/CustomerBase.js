System.register([], function (exports_1, context_1) {
    "use strict";
    var CustomerBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CustomerBase = /** @class */ (function () {
                function CustomerBase() {
                    this.name = "Customer Base";
                    this.numberOfYearsCustomer = 0;
                }
                CustomerBase.prototype.discountPercent = function () {
                    return .01 * this.numberOfYearsCustomer;
                };
                return CustomerBase;
            }());
            exports_1("CustomerBase", CustomerBase);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0N1c3RvbWVyQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLGVBQWUsQ0FBQztvQkFDdkIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO2dCQUk5QixDQUFDO2dCQUhHLHNDQUFlLEdBQWY7b0JBQ0ksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2dCQUM1QyxDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0FBQyxBQU5ELElBTUM7O1FBR0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDdXN0b21lciB9IGZyb20gXCIuL0lDdXN0b21lclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3VzdG9tZXJCYXNlIGltcGxlbWVudHMgSUN1c3RvbWVyIHtcbiAgICBuYW1lID0gXCJDdXN0b21lciBCYXNlXCI7XG4gICAgbnVtYmVyT2ZZZWFyc0N1c3RvbWVyID0gMDtcbiAgICBkaXNjb3VudFBlcmNlbnQoKSB7XG4gICAgICAgIHJldHVybiAuMDEgKiB0aGlzLm51bWJlck9mWWVhcnNDdXN0b21lcjtcbiAgICB9XG59XG5cblxuIl19