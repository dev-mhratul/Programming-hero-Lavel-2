import { prisma } from "../lib/prisma";
const createPost = async (data) => {
    const result = await prisma.post.create({
        data: {
            title: data.title
        }
    });
};
export const PostService = {
    createPost
};
//# sourceMappingURL=post.service.js.map