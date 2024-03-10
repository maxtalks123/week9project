"use server";
import { sql } from "@vercel/postgres";
import { auth } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";
export default async function SignUpFunction() {
  const { userId } = auth();
  await sql`INSERT INTO users (clerk_id) VALUES (${userId})`;
  return <SignUp afterSignUpUrl="/createprofile" />;
}
