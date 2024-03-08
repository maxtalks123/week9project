import Link from "next/link";
export default function HomePageIfSignedIn() {
  return (
    <div>
      <p>
        You're signed in on the homepage, why not go and see what everyone is
        saying by pressing{" "}
        <strong>
          <Link href="/posts">here?</Link>
        </strong>
      </p>
    </div>
  );
}
