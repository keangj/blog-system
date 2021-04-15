import path from "path";
import fs, {promises as fsPromise} from 'fs';
import matter from "gray-matter";
import marked from "marked";

const markdownDir = path.join(process.cwd(), 'markdown');

const getPosts = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');
    const { data: { title, date }, content } = matter(text);
    return { id, title, date };
  })
  return posts;
}

const getPost = async (fileName: string) => {
  const fullPath = path.join(markdownDir, `${fileName}.md`);
  const text = fs.readFileSync(fullPath, 'utf-8');
  const { data: { title, date }, content } = matter(text);
  const htmlContent = marked(content);
  return { id: fileName, title, date, content, htmlContent };
}

const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  return fileNames.map(fileName => fileName.replace(/\.md$/g, ''));
}

export { getPosts, getPost, getPostIds }
