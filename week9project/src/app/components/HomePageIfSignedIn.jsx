import Link from "next/link";
export default function HomePageIfSignedIn() {
  return (
    <div className=" bg-indigo-700 rounded border-4 border-black w-3/4 h-3/4 inline-flex flex-col items-center text-white p-6 m-12 text-center text-4xl">
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
