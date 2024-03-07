import { createGate } from 'effector-react'
import { createEffect, restore, sample } from "effector";
import { debug } from "patronum";

import { postService } from "../../api/services/post.service";



export const MainTableGate = createGate();

const getAllPostsFx = createEffect(postService.getAllPosts)

export const $posts = restore(getAllPostsFx, null);
export const $isPostsLoading = getAllPostsFx.pending;

sample({
    clock: MainTableGate.open,
    target: getAllPostsFx
})

debug({
    $posts
})