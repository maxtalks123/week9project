import Link from "next/link";

export default function MyAccount({ username }) {
  return (
    <>
      <Link href={`/${username}`}>Your Account</Link>
    </>
  );
}
