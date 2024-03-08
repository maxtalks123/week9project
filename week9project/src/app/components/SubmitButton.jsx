"use client";
import { useFormStatus } from "react-dom";
export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? "Adding your post" : "Submit your post"}
    </button>
  );
}
