import BlogCard from "@/components/modules/homePage/blog-card";
import BlogPage from "@/components/modules/homePage/blog-card";
import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types/blog.type";

export default async function Home() {
  const {data}= await blogService.getBlogPost()
  // console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
       {/* <Button className="cursor-pointer" variant="outline">Click Here</Button> */}
       {
        data?.data?.map((post: BlogPost)=>(
          <BlogCard  key={post.id} post={post}/>
        ))
       }
    </div>
  );
}

