export default async function PostDetailss({ postId }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json();

  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          background: "green",
          width: "500px",
          borderRadius: "20px",
          padding: "25px",
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
