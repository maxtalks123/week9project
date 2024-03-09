"use server";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page() {
  let userProfile = (await sql`SELECT id, username FROM users`).rows;

  if (!userProfile) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-3xl text-center">
        {" "}
        Here is a list of all our users!
      </h1>
      {userProfile.map((userProfile) => (
        <div
          key={userProfile.id}
          className=" bg-red-600 rounded border-4 border-black w-1/4 inline-flex flex-col items-center text-white p-4 m-4"
        >
          <h3>
            {" "}
            <strong>User: </strong>
            {userProfile.username}
          </h3>
          <Link
            href={`/users/${userProfile.username}`}
            className="p-1 m-1 border-4 border-white  bg-black text-white rounded-md"
          >
            See this users profile!
          </Link>
        </div>
      ))}
    </div>
  );
}

//add cler_id in to my users database
