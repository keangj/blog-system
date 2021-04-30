import "reflect-metadata";
import { Post } from './entity/Post';
import { User } from './entity/User';
import { Comment } from './entity/Comment';
import { createConnection } from "typeorm";

createConnection().then(async connection => {
  const { manager } = connection;

  const user1 = new User();
  user1.username = 'jay';
  user1.passwordDigest = '123456';
  await manager.save(user1);

  const post1 = new Post();
  post1.title = 'post 1';
  post1.content = 'content 1';
  post1.author = user1;
  await manager.save(post1);

  const commit1 = new Comment();
  commit1.user = user1;
  commit1.post = post1;
  commit1.content = 'hello world!';
  await manager.save(commit1);

  connection.close();
}).catch(error => console.log(error));
