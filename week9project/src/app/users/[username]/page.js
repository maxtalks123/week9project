import { sql } from "@vercel/postgres";
import NewPost from "../../components/NewPost";
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
      <div key={userProfile.id}>
        <h1>Page for: {params.username}</h1>
        <p>Bio: {userProfile.bio}</p>
        <p>Location: {userProfile.location}</p>
        <Link href={`/users/${userProfile.username}/posts`}>
          See all posts by this user
        </Link>
      </div>
      <NewPost username={params.username} userID={userProfile.id} />
    </div>
  );
}
