# 初始

``` bash
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

以下是 Windows 旧版 Docker 客户端（Toolbox）的命令（推荐 Windows 用户使用这一版客户端，很稳）

``` bash
docker run -v blog-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

``` bash
docker exec -it 容器id bash
psql -U 用户名 -W
\l 用于 list databases
\c 用于 connect to a database
\dt 用于 display tables
创建数据库
CREATE DATABASE 数据库名 ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
删除数据库
drop database 数据库名
```
