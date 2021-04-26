import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  title: string;
  @Column('text')
  content: string;
  // Partial 可传部分属性
  constructor(attributes: Partial<Post>) {
    Object.assign(this, attributes);
  }
}
