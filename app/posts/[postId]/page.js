import PostDetailss from "@/app/Components/PostDetailss";
import { Suspense } from "react";

export default async function PostDetails({ params }) {
  const postId = params.postId;
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${postId}`
  // );
  // const post = await response.json();
  const loading = <h1>Loading ...</h1>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "250px",
      }}
    >
      <div>
        <h1>Post Details</h1>
        <Suspense fallback={loading}>
          <PostDetailss postId={postId} />
        </Suspense>
      </div>
    </div>
  );
}
