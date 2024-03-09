"use server";
import { sql } from "@vercel/postgres";
import Link from "next/link";
export default async function posts() {
  const allPosts = (
    await sql`SELECT userposts.title, userposts.content, userposts.likes, users.username FROM userposts JOIN users ON users.id = userposts.user_id`
  ).rows;
  return (
    <div>
      <h1 className="text-3xl text-center">
        <strong>Here is a list of all posts</strong>
      </h1>
      {allPosts.map((allPosts) => (
        <div
          key={allPosts.id}
          className=" bg-green-900 rounded border-4 border-black w-1/4 inline-flex flex-col items-center text-white p-3 m-4"
        >
          <h2 className="m-4">Username: {allPosts.username}</h2>
          <h3 className="m-2">
            Post title:<p>{allPosts.title}</p>
          </h3>
          <p className="m-2">content: {allPosts.content}</p>
          <p className="m-2">Likes: {allPosts.likes}</p>
          <Link
            href={`/${allPosts.username}`}
            className="p-1 m-1 border-4 border-white  bg-yellow-400 text-black rounded-md"
          >
            Visit this users profile
          </Link>
        </div>
      ))}
    </div>
  );
}
