import path from "path";
import {promises as fsPromise} from 'fs';

const getPosts = async () => {
  const markdownDir = path.join(process.cwd(), 'markdown')
  return await fsPromise.readdir(markdownDir)
}
export { getPosts }
