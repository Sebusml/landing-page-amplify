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
    <main className="antialiased mx-auto max-w-screen-sm pt-8">
      <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
        Welcome to our blog
      </h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post}></PostPreview>
        ))}
      </div>
    </main>
  );
};

export default Home;
