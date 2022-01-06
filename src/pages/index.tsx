import { API } from "aws-amplify";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import { listPosts } from "../graphql/queries";
import { ListPostsQuery, Post } from "../API";
import PostPreview from "../components/PostPreview";

const Home: NextPage = () => {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPostsFromApi = async () => {
      const allPosts = (await API.graphql({ query: listPosts })) as {
        data: ListPostsQuery;
        errors: any[];
      };
      if (allPosts.data.listPosts) {
        setPosts(allPosts.data.listPosts.items as Post[]);
        return allPosts.data.listPosts.items as Post[];
      } else {
        throw new Error("Could not get the posts");
      }
    };

    fetchPostsFromApi();
  }, []);

  return (
    <div className="antialiased mx-auto max-w-screen-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Posts</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post}></PostPreview>
        ))}
      </div>
    </div>
  );
};

export default Home;
