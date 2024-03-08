"use server";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import {
  UserButton,
  SignInButton,
  SignedOut,
  auth,
  SignedIn,
  SignIn,
} from "@clerk/nextjs";

export default async function NavBar() {
  const { userId } = auth();
  const username = (await sql`SELECT * FROM users WHERE clerk_id = ${userId}`)
    .rows[0].username;
  console.log(username);
  //
  return (
    <nav className="p-2 m-2 bg-red-800 text-white space-x-14 h-12 text-lg">
      <Link href="/">Home page</Link>
      <SignedIn>
        <Link href="/posts">All posts</Link>
        <Link href={`/users/${username}`}>Your account</Link>
        <Link href="/users">TSSMOK Users</Link>
      </SignedIn>
      <SignedOut>
        <SignIn>Sign in again here!</SignIn>
      </SignedOut>
      {userId ? (
        <UserButton />
      ) : (
        <SignInButton afterSignInURL={`/users/${username}`} />
      )}
    </nav>
  );
}
