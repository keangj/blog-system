import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {

    const posts = await connection.manager.find(Post)
    console.log(posts);
    await connection.manager.save([1,2,3,4,5].map(item => {
        return new Post({ title: `第${item}篇标题`, content: `第${item}篇内容` });
    }));
    connection.close();

}).catch(error => console.log(error));
