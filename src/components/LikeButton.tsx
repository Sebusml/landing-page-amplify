import { ThumbUpIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { Post } from "../API";
import { useUser } from "../context/AuthContext";

interface Props {
  post: Post;
  path: string;
  incrementLikesCount: Function;
}

export default function LikeButton({
  post,
  path,
  incrementLikesCount,
}: Props): ReactElement {
  const router = useRouter();
  const { user } = useUser();
  const [likedEffect, setLikeEffect] = useState(false);
  const [debounceTimeoutId, setDebounceTimeoutId] = useState(0);
  const [likeClicksCount, setLikeClicksCount] = useState(0);
  const [likesCount, setLikesCount] = useState(post.upvotes);

  const onLikePost = (event) => {
    event.stopPropagation();
    // Like button animation
    if (!likedEffect) {
      setLikeEffect(true);
      setTimeout(() => {
        setLikeEffect(false);
      }, 1500);
    }

    // Only logged users can like stuff
    if (!user) {
      router.push(`/signin`);
      return;
    }
    // Immediately update so UI feels more responsive
    setLikesCount((x) => x + 1);
    setLikeClicksCount((x) => x + 1);
  };

  // Debounce network calls with the total number of clicks(new likes).
  // This hook will execute numClicks + 1, due to the setLikesCount(0).
  // Recursion ends cuz during the last call the likesCount is zero and the new value is zero
  // , and as a result, the hook does not detect any DOM change.
  // Note: We use a Hook due to (potential) async state updates.
  useEffect(() => {
    if (debounceTimeoutId) {
      clearTimeout(debounceTimeoutId);
    }
    let timeoutID = window.setTimeout(() => {
      incrementLikesCount(post.id, likeClicksCount)
        .then(() => setLikeClicksCount(0))
        .catch(() => setLikeClicksCount(0));
    }, 600);
    setDebounceTimeoutId(timeoutID);

    return () => {
      clearTimeout(debounceTimeoutId);
    };
  }, [likeClicksCount, post.id]); // we need to exclude debounceTimeoutId to avoid infinite loops.

  return (
    <button
      className="flex items-center hover:bg-gray-100 rounded p-1"
      onClick={onLikePost}
    >
      <ThumbUpIcon
        className={`${likedEffect && "animate-bounce"} h-6 text-gray-500`}
      ></ThumbUpIcon>
      <span className="text-sm text-gray-500 font-semibold">
        &nbsp;{likesCount}&nbsp;Likes&nbsp;&nbsp;
      </span>
    </button>
  );
}
