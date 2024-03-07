import { PostService } from "./models";
import { Post } from "../../models/post";
import { http } from "../../http";

const prefix = 'posts/';

const urlFactory = {
    getAllPosts: `${prefix}`
}

export const postService: PostService = {
    getAllPosts: async () => {
        const response = await http.get<Post[]>(urlFactory.getAllPosts);
        return response.data.splice(0, 10);
    }
}