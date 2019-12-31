System.register(["./CustomerBronze", "./CustomerGold", "./CustomerSilver", "./CustomerAnonymous", "./Product"], function (exports_1, context_1) {
    "use strict";
    var CustomerBronze_1, CustomerGold_1, CustomerSilver_1, CustomerAnonymous_1, Product_1, IndexVm, indexVmInstance;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CustomerBronze_1_1) {
                CustomerBronze_1 = CustomerBronze_1_1;
            },
            function (CustomerGold_1_1) {
                CustomerGold_1 = CustomerGold_1_1;
            },
            function (CustomerSilver_1_1) {
                CustomerSilver_1 = CustomerSilver_1_1;
            },
            function (CustomerAnonymous_1_1) {
                CustomerAnonymous_1 = CustomerAnonymous_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            }
        ],
        execute: function () {
            IndexVm = /** @class */ (function () {
                function IndexVm() {
                    this.currentCustomer = new CustomerAnonymous_1.CustomerAnonymous();
                    this.productList = new Array(0);
                }
                IndexVm.prototype.loginBronze = function () {
                    this.currentCustomer = new CustomerBronze_1.CustomerBronze();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.loginSilver = function () {
                    this.currentCustomer = new CustomerSilver_1.CustomerSilver();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.loginGold = function () {
                    this.currentCustomer = new CustomerGold_1.CustomerGold();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.displayProducts = function () {
                    var _this = this;
                    this.loadProducts();
                    var htmlToDisplay = "<th>Product Name</th><th>Price</th>";
                    this.productList.forEach(function (product) {
                        htmlToDisplay += "<tr><td>" + product.name + "</td><td>" + product.currentPrice(_this.currentCustomer) + "</td></tr>";
                    });
                    $("#productsTable")[0].innerHTML = htmlToDisplay;
                };
                IndexVm.prototype.loadProducts = function () {
                    this.productList.length = 0;
                    this.productList.push(new Product_1.Product("Product 1", 100.00));
                    this.productList.push(new Product_1.Product("Product 2", 200.00));
                    this.productList.push(new Product_1.Product("Product 3", 300.00));
                    this.productList.push(new Product_1.Product("Product 4", 400.00));
                    this.productList.push(new Product_1.Product("Product 5", 500.00));
                    this.productList.push(new Product_1.Product("Product 6", 600.00));
                    this.productList.push(new Product_1.Product("Product 7", 700.00));
                    this.productList.push(new Product_1.Product("Product 8", 800.00));
                    this.productList.push(new Product_1.Product("Product 9", 900.00));
                    this.productList.push(new Product_1.Product("Product 10", 1000.00));
                };
                IndexVm.prototype.setWelcomeMsg = function () {
                    var msg = "Welcome " + this.currentCustomer.name;
                    $("#customerName")[0].innerText = msg;
                };
                return IndexVm;
            }());
            exports_1("IndexVm", IndexVm);
            exports_1("indexVmInstance", indexVmInstance = new IndexVm());
            $(document).ready(function () {
                indexVmInstance.setWelcomeMsg();
                indexVmInstance.displayProducts();
            });
            $('#loginBronze').click(function () {
                indexVmInstance.loginBronze();
            });
            $('#loginSilver').click(function () {
                indexVmInstance.loginSilver();
            });
            $('#loginGold').click(function () {
                indexVmInstance.loginGold();
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhWTS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmRleFZNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQUE7b0JBRVksb0JBQWUsR0FBYyxJQUFJLHFDQUFpQixFQUFFLENBQUM7b0JBRXJELGdCQUFXLEdBQW9CLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQW9EeEQsQ0FBQztnQkFsREcsNkJBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO29CQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw2QkFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7b0JBQzVDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDJCQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsaUNBQWUsR0FBZjtvQkFBQSxpQkFVQztvQkFURyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBRXBCLElBQUksYUFBYSxHQUFXLHFDQUFxQyxDQUFDO29CQUVsRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQzVCLGFBQWEsSUFBSSxhQUFXLE9BQU8sQ0FBQyxJQUFJLGlCQUFZLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFZLENBQUM7b0JBQy9HLENBQUMsQ0FBQyxDQUFDO29CQUVILENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7Z0JBQ3JELENBQUM7Z0JBRU8sOEJBQVksR0FBcEI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsK0JBQWEsR0FBYjtvQkFDSSxJQUFJLEdBQUcsR0FBRyxhQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBTSxDQUFDO29CQUNqRCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTCxjQUFDO1lBQUQsQ0FBQyxBQXhERCxJQXdEQzs7WUFFRCw2QkFBVyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsRUFBQztZQUUzQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNkLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBRTtnQkFDckIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBS0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbWVyQmFzZSB9IGZyb20gXCIuL0N1c3RvbWVyQmFzZVwiO1xuaW1wb3J0IHsgSUN1c3RvbWVyIH0gZnJvbSBcIi4vSUN1c3RvbWVyXCI7XG5pbXBvcnQgeyBDdXN0b21lckJyb256ZSB9IGZyb20gXCIuL0N1c3RvbWVyQnJvbnplXCI7XG5pbXBvcnQgeyBDdXN0b21lckdvbGQgfSBmcm9tIFwiLi9DdXN0b21lckdvbGRcIlxuaW1wb3J0IHsgQ3VzdG9tZXJTaWx2ZXIgfSBmcm9tIFwiLi9DdXN0b21lclNpbHZlclwiO1xuaW1wb3J0IHsgQ3VzdG9tZXJBbm9ueW1vdXMgfSBmcm9tIFwiLi9DdXN0b21lckFub255bW91c1wiO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi9JUHJvZHVjdFwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL1Byb2R1Y3RcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Vm0ge1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50Q3VzdG9tZXI6IElDdXN0b21lciA9IG5ldyBDdXN0b21lckFub255bW91cygpO1xuXG4gICAgcHJpdmF0ZSBwcm9kdWN0TGlzdDogQXJyYXk8SVByb2R1Y3Q+ID0gbmV3IEFycmF5KDApO1xuXG4gICAgbG9naW5Ccm9uemUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEN1c3RvbWVyID0gbmV3IEN1c3RvbWVyQnJvbnplKCk7XG4gICAgICAgIHRoaXMuc2V0V2VsY29tZU1zZygpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGxvZ2luU2lsdmVyKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDdXN0b21lciA9IG5ldyBDdXN0b21lclNpbHZlcigpO1xuICAgICAgICB0aGlzLnNldFdlbGNvbWVNc2coKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBsb2dpbkdvbGQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEN1c3RvbWVyID0gbmV3IEN1c3RvbWVyR29sZCgpO1xuICAgICAgICB0aGlzLnNldFdlbGNvbWVNc2coKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvZHVjdHMoKSB7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RzKCk7XG5cbiAgICAgICAgbGV0IGh0bWxUb0Rpc3BsYXk6IHN0cmluZyA9IFwiPHRoPlByb2R1Y3QgTmFtZTwvdGg+PHRoPlByaWNlPC90aD5cIjtcblxuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBodG1sVG9EaXNwbGF5ICs9IGA8dHI+PHRkPiR7cHJvZHVjdC5uYW1lfTwvdGQ+PHRkPiR7cHJvZHVjdC5jdXJyZW50UHJpY2UodGhpcy5jdXJyZW50Q3VzdG9tZXIpfTwvdGQ+PC90cj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiI3Byb2R1Y3RzVGFibGVcIilbMF0uaW5uZXJIVE1MID0gaHRtbFRvRGlzcGxheTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgMVwiLCAxMDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCAyXCIsIDIwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDNcIiwgMzAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgNFwiLCA0MDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA1XCIsIDUwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDZcIiwgNjAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgN1wiLCA3MDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA4XCIsIDgwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDlcIiwgOTAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgMTBcIiwgMTAwMC4wMCkpO1xuICAgIH1cblxuICAgIHNldFdlbGNvbWVNc2coKSB7XG4gICAgICAgIHZhciBtc2cgPSBgV2VsY29tZSAke3RoaXMuY3VycmVudEN1c3RvbWVyLm5hbWV9YDtcbiAgICAgICAgJChcIiNjdXN0b21lck5hbWVcIilbMF0uaW5uZXJUZXh0ID0gbXNnO1xuICAgIH1cblxufVxuXG5leHBvcnQgbGV0IGluZGV4Vm1JbnN0YW5jZSA9IG5ldyBJbmRleFZtKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICBpbmRleFZtSW5zdGFuY2Uuc2V0V2VsY29tZU1zZygpO1xuICAgIGluZGV4Vm1JbnN0YW5jZS5kaXNwbGF5UHJvZHVjdHMoKTtcbn0pO1xuXG4kKCcjbG9naW5Ccm9uemUnKS5jbGljayggZnVuY3Rpb24oKSB7XG4gICAgaW5kZXhWbUluc3RhbmNlLmxvZ2luQnJvbnplKCk7XG59KTtcblxuJCgnI2xvZ2luU2lsdmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGluZGV4Vm1JbnN0YW5jZS5sb2dpblNpbHZlcigpO1xufSk7XG5cbiQoJyNsb2dpbkdvbGQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaW5kZXhWbUluc3RhbmNlLmxvZ2luR29sZCgpO1xufSk7XG5cblxuXG5cbiJdfQ==