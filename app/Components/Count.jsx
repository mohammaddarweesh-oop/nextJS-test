"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Count() {
  const [todo, setTodo] = useState([]); // قم بتهيئة "todo" كمصفوفة فارغة

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        console.log(data[0].title);
      });
  }, []);

  const titles = todo.map((post) => (
    <Link href={`posts/${post.id}`}>
      <div
        key={post.id}
        style={{
          marginTop: "10px",
          background: "green",
          width: "500px",
          borderRadius: "20px",
          padding: "25px",
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </Link>
  ));

  console.log(titles);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {titles} {/* قم بعرض المصفوفة المختارة من العناوين */}
    </div>
  );
}

export default Count;

// "use client";

// import { useEffect, useState } from "react";

// function Count() {
//   const [todo, setTodo] = useState({ title: "mosa" });

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       next: {
//         revalidate: 120,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setTodo(data);
//         console.log(data[0].title);
//       });
//   }, []);
//   const titles = todo.map((post) => {
//     return (
//       <div key={post.id}>
//         <h1>{post.title}</h1>
//         <p>{post.body}</p>
//       </div>
//     );
//   });
//   console.log(titles);
//   return (
//     <div>
//       <h1>{todo.title}</h1>
//     </div>
//   );
// }

// export default Count;
