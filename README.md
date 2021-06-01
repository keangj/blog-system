# 初始

## 使用 docker 启动数据库

``` bash
mkdir blog-data
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

以下是 Windows 旧版 Docker 客户端（Toolbox）的命令（推荐 Windows 用户使用这一版客户端，很稳）

``` bash
docker run -v blog-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

``` bash
docker exec -it <容器id> bash
psql -U <用户名（blog）> -W

\l 用于 list databases
\c 用于 connect to a database
\dt 用于 display tables
```

## 创建数据库

``` bash
CREATE DATABASE <数据库名> ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```

## 删除数据库

``` bash
drop database <数据库名>
```

## 数据表

修改 ormcongig.json 中的 host

``` bash
yarn m:run
node dist/seed.js
```

## 开发

``` bash
yarn dev
```

## 部署

``` bash
mkdir blog-data
docker run --network=host -v /home/blog/blog-data/:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2


yarn install --production=false
yarn build
docker build . -t <your username>/node-web-app
docker build . -t jay/node-web-app
docker run -p 3000:3000 -d <your username>/node-web-app
docker run --network=host -p 3000:3000 -d jay/node-web-app
```
