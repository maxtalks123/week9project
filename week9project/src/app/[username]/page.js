import { sql } from "@vercel/postgres";
import NewPost from "../components/NewPost";

export default async function Page({ params }) {
  let userProfile = (
    await sql`SELECT * FROM users WHERE username = ${params.username}`
  ).rows[0];
  console.log(userProfile);
  return (
    <div>
      <div key={userProfile.id}>
        <h1>Page for: {userProfile.username}</h1>
        <p>Bio: {userProfile.bio}</p>
        <p>Location: {userProfile.location}</p>
      </div>
      <NewPost username={params.username} userID={userProfile.id} />
    </div>
  );
}
