import RegisterTabs from "./components/RegisterTabs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import HomePageIfSignedIn from "./components/HomePageIfSignedIn";
import SignOutRedirect from "./components/SignOutRedirect";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center m-8">
        <strong>
          This is the home page to TSSMSOL (The SECRET SOCIAL MEDIA SOCIETY OF
          LEGENDS)
        </strong>
      </h1>
      <SignedIn>
        <HomePageIfSignedIn />
      </SignedIn>
      <SignedOut>
        <SignOutRedirect />
      </SignedOut>

      {/* <SignedOut>
        <RegisterTabs />
      </SignedOut> */}
    </div>
  );
}
