"use server";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page() {
  let userProfile = (await sql`SELECT id, username FROM users`).rows;
  console.log(userProfile);

  if (!userProfile) {
    notFound();
  }
  return (
    <div>
      <h1> Here is a list of all our users!</h1>
      {userProfile.map((userProfile) => (
        <div key={userProfile.id}>
          <h3> user: {userProfile.username}</h3>
          <Link href={`/users/${userProfile.username}`}>
            See this users profile!
          </Link>
        </div>
      ))}
    </div>
  );
}

//add cler_id in to my users database
