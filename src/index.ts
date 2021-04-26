import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {

    const posts = await connection.manager.find(Post)
    console.log(posts);
    const p = new Post();
    p.title = 'first';
    p.content = 'content';
    await connection.manager.save(p);
    const posts2 = await connection.manager.find(Post)
    console.log(posts2);
    connection.close();

}).catch(error => console.log(error));
