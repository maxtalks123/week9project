"use server";
import { sql } from "@vercel/postgres";
export default async function posts({ params }) {
  const userPosts = (
    await sql`SELECT userposts.title, userposts.content, userposts.likes, users.username FROM userposts JOIN users ON users.id = userposts.user_id WHERE users.username = ${params.username}`
  ).rows;
  return (
    <div>
      <h1>Here is a list of all posts by {params.username}</h1>
      {userPosts.map((userPosts) => (
        <div key={userPosts.id}>
          <h2>Username: {userPosts.username}</h2>
          <h3>
            Post title:<p>{userPosts.title}</p>
          </h3>
          <p>content: {userPosts.content}</p>
          <p>Likes: {userPosts.likes}</p>
        </div>
      ))}
    </div>
  );
}
//add like button
