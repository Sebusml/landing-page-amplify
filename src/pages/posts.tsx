import { API, graphqlOperation } from "aws-amplify";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import { postsByDate } from "../graphql/queries";
import { PostsByDateQuery, Post, ModelSortDirection } from "../API";
import PostPreview from "../components/PostPreview";
import incrementLikesCount from "./api/postLike/pushNewLike";

const Posts: NextPage = () => {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPostsFromApi = async () => {
      const allPosts = (await API.graphql(
        graphqlOperation(postsByDate, {
          type: "post",
          sortDirection: ModelSortDirection.DESC,
        })
      )) as {
        data: PostsByDateQuery;
        errors: any[];
      };
      if (allPosts.data.postsByDate) {
        setPosts(allPosts.data.postsByDate.items as Post[]);
        return allPosts.data.postsByDate.items as Post[];
      } else {
        throw new Error("Could not get the posts");
      }
    };

    fetchPostsFromApi();
  }, []);

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main className="antialiased mx-auto max-w-screen-sm pt-8 px-4 md:px-6">
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            Lorem Ipsum
          </h1>
          <ul className="space-y-4 last:mb-4">
            {posts.map((post) => (
              <PostPreview
                key={post.id}
                post={post}
                likeButtonCallback={incrementLikesCount}
              ></PostPreview>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Posts;
