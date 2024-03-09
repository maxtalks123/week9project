import { sql } from "@vercel/postgres";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  let userProfile;
  try {
    userProfile = (
      await sql`SELECT * FROM users WHERE username = ${params.username}`
    ).rows[0];
  } catch (err) {
    notFound();
  }
  if (!userProfile) {
    notFound();
  }
  return (
    <div>
      <div
        key={userProfile.id}
        className=" bg-black rounded border-4 border-black w-3/4 h-3/4 inline-flex flex-col items-center text-white p-6 m-12 text-center text-4xl"
      >
        <h1 className="m-8">
          <strong>Page for: </strong> {params.username}
        </h1>
        <p className="m-4">
          <strong>Bio: </strong>
          {userProfile.bio}
        </p>
        <p className="m-4">
          <strong>Location: </strong>
          {userProfile.location}
        </p>
        <Link
          href={`/users/${userProfile.username}/posts`}
          className="p-1 m-4 border-4 border-white  bg-green-700 text-black rounded-md"
        >
          See all posts by this user
        </Link>
      </div>
    </div>
  );
}
