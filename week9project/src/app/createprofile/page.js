import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitProfileButton from "../components/SubmitProfileButton";

export default function makeProfile() {
  async function handleMakeProfile(formData) {
    "use server";
    const bio = formData.get("bio");
    const location = formData.get("location");
    const username = formData.get("username");

    await sql`INSERT INTO users (bio, location, username) VALUES (${bio}, ${location}, ${username})`;

    revalidatePath("/createprofile");
    redirect(`/${username}`);
  }
  return (
    <div className="bg-blue-400 m-2 p-2 flex flex-col items-center">
      <h1>Create your profile here</h1>
      <form
        action={handleMakeProfile}
        className="p-8 w-6/12 flex flex-col justify-center"
      >
        <label>Enter a bit about yourself</label>
        <textarea name="bio" placeholder="What make you unique?"></textarea>
        <label>Location</label>
        <input name="location" placeholder="Where are you from?"></input>
        <label>Username</label>
        <input name="username" placeholder="Enter a unique username"></input>
        <SubmitProfileButton />
      </form>
    </div>
  );
}
