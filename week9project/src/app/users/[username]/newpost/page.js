import NewPost from "@/app/components/NewPost";
import { sql } from "@vercel/postgres";

export default async function Page({ params }) {
  let userID;
  try {
    userID = (
      await sql`SELECT * FROM users WHERE username = ${params.username}`
    ).rows[0].id;
    console.log(userID);
  } catch (err) {
    notFound();
  }
  return <NewPost userID={userID} />;
}
