import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import RegisterTabs from "./RegisterTabs";

export default function SignOutRedirect() {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return <RegisterTabs />;
}
