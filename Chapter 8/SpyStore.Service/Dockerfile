FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["SpyStore.Service/SpyStore.Service.csproj", "SpyStore.Service/"]
COPY ["SpyStore.Dal/SpyStore.Dal.csproj", "SpyStore.Dal/"]
COPY ["SpyStore.Models/SpyStore.Models.csproj", "SpyStore.Models/"]
RUN dotnet restore "SpyStore.Service/SpyStore.Service.csproj"
COPY . .
WORKDIR "/src/SpyStore.Service"
RUN dotnet build "SpyStore.Service.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SpyStore.Service.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SpyStore.Service.dll"]
