"use server";
import { sql } from "@vercel/postgres";
export default async function posts({ params }) {
  const userPosts = (
    await sql`SELECT userposts.title, userposts.content, userposts.likes, users.username FROM userposts JOIN users ON users.id = userposts.user_id WHERE users.username = ${params.username}`
  ).rows;
  return (
    <div>
      <h1 className="text-3xl text-center">
        Here is a list of all posts by: <strong>{params.username}</strong>
      </h1>
      {userPosts.map((userPosts) => (
        <div
          key={userPosts.id}
          className=" bg-blue-600 rounded border-4 border-black w-1/4 inline-flex flex-col items-center text-white p-4 m-4"
        >
          <h2>
            <strong>Username:</strong> {userPosts.username}
          </h2>
          <h3>
            <strong>Post title:</strong>
            <p>{userPosts.title}</p>
          </h3>
          <p>
            <strong>Content: </strong>
            {userPosts.content}
          </p>
          <p>
            <strong>Likes:</strong> {userPosts.likes}
          </p>
        </div>
      ))}
    </div>
  );
}
//add like button
