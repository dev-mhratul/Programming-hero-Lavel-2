import { PostService } from "./post.service";
const createPost = async (req, res) => {
    try {
        const result = await PostService.createPost(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({
            error: "post creation fail",
            detail: error
        });
    }
};
export const PostController = {
    createPost
};
//# sourceMappingURL=post.controller.js.map