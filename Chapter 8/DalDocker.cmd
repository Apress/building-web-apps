docker pull mcr.microsoft.com/mssql/server:2017-latest
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=P@ssw0rd" -e "MSSQL_PID=Express" -p 5433:1433 --name SpyStore21 -d mcr.microsoft.com/mssql/server:2017-latest

docker container ls -a
docker container start <container id>
docker container stop <container id>