import { Post } from "../../models/post";


export interface PostService {
    getAllPosts(): Promise<Post[]>,
}