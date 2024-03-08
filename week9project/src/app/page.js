import RegisterTabs from "./components/RegisterTabs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import HomePageIfSignedIn from "./components/HomePageIfSignedIn";

export default function Home() {
  return (
    <div>
      <h1>
        <strong>
          This is the home page to TSSMSOL (The SECRET SOCIAL MEDIA SOCIETY OF
          LEGENDS)
        </strong>
      </h1>
      <SignedIn>
        <HomePageIfSignedIn />
      </SignedIn>
      <SignedOut>
        <RegisterTabs />
      </SignedOut>
    </div>
  );
}
