rem pin the .NET Core SDK VS 2019 Update 1
dotnet new globaljson --sdk-version 2.1.700
rem VS2019 16.0 dotnet new globaljson --sdk-version 2.1.600
rem VS2017 dotnet new globaljson --sdk-version 2.1.600
rem create the solution
dotnet new sln -n SpyStore

rem create the Data Access Layer class library, and add to the solution
dotnet new classlib -n SpyStore.Dal -o .\SpyStore.Dal -f netcoreapp2.1
dotnet sln SpyStore.sln add SpyStore.Dal

rem create the class library for the Models and add it to the solution
rem NOTE THE NEXT TWO LINES MUST BE ON ONE LINE IN THE COMMAND FILE
dotnet new classlib -n SpyStore.Models -o .\SpyStore.Models -f netcoreapp2.1
dotnet sln SpyStore.sln add SpyStore.Models
rem create the Data Access Layer XUnit project and add it to the solution
dotnet new xunit -n SpyStore.Dal.Tests -o .\SpyStore.Dal.Tests 
dotnet sln SpyStore.sln add SpyStore.Dal.Tests
rem create the XUnit project for the Service and add it to the solution
dotnet new xunit -n SpyStore.Service.Tests -o .\SpyStore.Service.Tests 
dotnet sln SpyStore.sln add SpyStore.Service.Tests
rem create the ASP.NET Core RESTful Service project, add it to the solution
rem NOTE THE NEXT TWO LINES MUST BE ON ONE LINE IN THE COMMAND FILE
dotnet new webapi -n SpyStore.Service -au none --no-https  -o .\SpyStore.Service 
dotnet sln SpyStore.sln add SpyStore.Service
rem create the ASP.NET Core Web App project and add it to the solution
dotnet new Mvc -n SpyStore.Mvc -au none --no-https  -o .\SpyStore.Mvc 
dotnet sln SpyStore.sln add SpyStore.Mvc

rem Add references between projects
dotnet add SpyStore.Mvc reference Spystore.Models

dotnet add SpyStore.Dal reference Spystore.Models

dotnet add SpyStore.Dal.Tests reference SpyStore.Models
dotnet add SpyStore.Dal.Tests reference SpyStore.Dal

dotnet add SpyStore.Service reference SpyStore.Dal
dotnet add SpyStore.Service reference SpyStore.Models

dotnet add SpyStore.Service.Tests reference SpyStore.Models
dotnet add SpyStore.Service.Tests reference SpyStore.Dal
