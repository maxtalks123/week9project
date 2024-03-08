"use server";
import { sql } from "@vercel/postgres";
import Link from "next/link";
export default async function posts() {
  const allPosts = (
    await sql`SELECT userposts.title, userposts.content, userposts.likes, users.username FROM userposts JOIN users ON users.id = userposts.user_id`
  ).rows;
  return (
    <div>
      <h1>Here is a list of all posts</h1>
      {allPosts.map((allPosts) => (
        <div key={allPosts.id}>
          <h2>Username: {allPosts.username}</h2>
          <h3>
            Post title:<p>{allPosts.title}</p>
          </h3>
          <p>content: {allPosts.content}</p>
          <p>Likes: {allPosts.likes}</p>
          <Link href="`/${userPosts.username}`">Visit this users profile</Link>
        </div>
      ))}
    </div>
  );
}
