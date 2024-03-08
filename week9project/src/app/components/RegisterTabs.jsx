"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { SignIn, SignUp } from "@clerk/nextjs";
import "./registerbutton.css";

export default function RegisterTabs() {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List
        className="TabsList"
        aria-label="Sign up if you don't have an account"
      >
        <Tabs.Trigger className="TabsTrigger" value="tab1">
          Sign up
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
          Sign In
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="tab1">
        <p className="Text">Don't have an account? Sign up here</p>
        <SignUp afterSignUpUrl="/createprofile" />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <p className="Text">
          If you have an account already then sign up here!
        </p>
        <SignIn afterSignInUrl="/posts" />
      </Tabs.Content>
    </Tabs.Root>
  );
}
