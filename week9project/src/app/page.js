import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        <strong>
          This is the home page to TSSMSOL (The SECRET SOCIAL MEDIA SOCIETY OF
          LEGENDS)
        </strong>
      </h1>
      <button>
        <Link href="/createprofile">
          Click here to make an account and get started
        </Link>
      </button>
    </div>
  );
}
