import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitButton from "./SubmitButton";

export default function NewPost({ username, userID }) {
  console.log(userID);
  async function handleNewPost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO userPosts (title, content, user_id) VALUES (${title}, ${content}, ${userID})`;

    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <div className="bg-blue-400 m-2 p-2 flex flex-col items-center">
      <h1> Add your post below</h1>
      <form
        action={handleNewPost}
        className="p-8 w-6/12 flex flex-col justify-center"
      >
        <label>Title your post</label>
        <input name="title" placeholder="Title your post" />
        <label>Body of your post</label>
        <textarea
          id="content"
          name="content"
          placeholder="Enter your post here"
        />
        <SubmitButton />
      </form>
    </div>
  );
}
