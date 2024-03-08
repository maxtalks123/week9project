"use client";
import { useFormStatus } from "react-dom";
export default function SubmitProfileButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? "Making your profile" : "Create your profile"}
    </button>
  );
}
