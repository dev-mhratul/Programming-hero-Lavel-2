import { Post } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

const createPost = async (data: Post)=>{
    const result = await prisma.post.create({
        data:{
            title: data.title,
            content: data.content,
            authorId: data.authorId
        }
    })
    return result;
}

export const PostService={
    createPost
}